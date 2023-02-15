import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase-config'
import { Card, Image, Container, Button, Collapse, Form } from 'react-bootstrap'
import { getDoc, doc, updateDoc } from 'firebase/firestore'


export default function ItemScreen() {
    const {itemId} = useParams();
    const [removeOpen, setRemoveOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [[name, setName], [image, setImage], [price, setPrice], [isInStock, setIsInStock], [category, setCategory]] = [useState(''), useState(''), useState(''), useState(false), useState('Rings')]

    const updateItem = () => {
        const jewelryRef = doc(db , 'jewelry', itemId)
        updateDoc(jewelryRef, {name, image, price, isInStock, category});
    }

    useEffect(() => {
        getDoc(doc(db, 'jewelry', itemId)).then(doc => {
            setName(doc.data().name);
            setImage(doc.data().image);
            setPrice(doc.data().price);
            setIsInStock(doc.data().isInStock);
            setCategory(doc.data().category);
        })
    }, [itemId]);

    return <Container style={{width: '100vw', height: '90vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20}}>
        <Collapse dimension="width" in={editOpen}>
            <div>
                <Card body style={{ width: '400px' }}>
                    <Form onSubmit={e => {e.preventDefault(); updateItem()}} style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={e => {setName(e.currentTarget.value)}} type='text'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control value={price} onChange={e => {setPrice(Number(e.currentTarget.value))}} type='number'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control value={image} onChange={e => {setImage(e.currentTarget.value)}} type='text'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={category} onChange={e => {setCategory(e.currentTarget.value)}}>
                                <option value={'Rings'}>Rings</option>
                                <option value={'Chains'}>Chains</option>
                                <option value={'Earrings'}>Earrings</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                            <Form.Label>In Stock</Form.Label>
                            <Form.Check onChange={e => {setIsInStock(Boolean(e.currentTarget.value))}} type='switch'/>
                        </Form.Group>
                        <Form.Group>
                            <Button type='submit' variant='success'>Save changes</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        </Collapse>

        <Card style={{width: "18vw", height: '32vw'}}>
            <Image style={{objectFit: 'cover'}} height={250} src={image} className="card-img-top" alt="..."/>
            <Card.Body>
                <h1 className="card-title">{name}</h1>
                <Card.Text style={{fontSize: 25}} className="card-text">Price: {price}₪<br/>In Stock: {!isInStock ? '❌' : '✅'}</Card.Text>
            </Card.Body>
            <Card.Footer style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                <Button onClick={() => {setEditOpen(!editOpen); setRemoveOpen(false)}} style={{width: '50%'}} variant={editOpen ? 'secondary' : 'warning'}>{editOpen ? 'Cancel' : 'Edit'}</Button>
                <Button onClick={() => {setRemoveOpen(!removeOpen); setEditOpen(false)}} style={{width: '50%'}} variant={removeOpen ? 'secondary' : 'danger'}>{removeOpen ? 'Cancel' : 'Remove'}</Button>
            </Card.Footer>
        </Card>

        <Collapse dimension="width" in={removeOpen}>
            <div>
                <Card body style={{ width: '250px' }}>
                    <Card.Text>This action can't be undone!<br/>Are you sure you want to delete?</Card.Text>
                    <Button variant='danger'>Remove</Button>
                </Card>
            </div>
        </Collapse>
    </Container>
}
