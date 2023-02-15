import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Container, Form, Button } from 'react-bootstrap';
import './Add.css'

export default function Add() {
    const [[name, setName], [image, setImage], [price, setPrice], [isInStock, setIsInStock], [category, setCategory]] = [useState(''), useState(''), useState(''), useState(false), useState('Rings')]

    const reset = () => {
        setName('');
        setImage('');
        setPrice('');
        setIsInStock(false);
        setCategory('Rings');
    }

    const addItem = () => {
        const jewelryRef = collection(db , 'jewelry')
        addDoc(jewelryRef, {name, image, price, isInStock, category}).then(doc => {
            reset();
        });
    }

    return (
        <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <Form onSubmit={e => {e.preventDefault(); addItem()}} style={{display: 'flex', flexDirection: 'column', width: '20vw', gap: 15, padding: 20, backgroundColor: '#f2f2f2', borderRadius: 20, border: '1px solid rgba(0,0,0,0.4)'}}>
                <Form.Group className='formGroup'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.currentTarget.value)} type='text'/>
                </Form.Group>
                <Form.Group className='formGroup'>
                    <Form.Label>Image:</Form.Label>
                    <Form.Control value={image} onChange={e => setImage(e.currentTarget.value)} type='text'/>
                </Form.Group>
                <Form.Group className='formGroup'>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control value={price} onChange={e => setPrice(Number(e.currentTarget.value))} type='number'/>
                </Form.Group>
                <Form.Group style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                    <Form.Label>In Stock:</Form.Label>
                    <Form.Check checked={isInStock} onChange={e => setIsInStock(Boolean(e.currentTarget.value))} type='switch'/>
                </Form.Group>
                <Form.Group className='formGroup'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Select value={category} onChange={e => setCategory(e.currentTarget.value)}>
                        <option value={'Rings'}>Ring</option>
                        <option value={'Chains'}>Chain</option>
                        <option value={'Earrings'}>Earring</option>
                    </Form.Select>
                </Form.Group>
                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}