// 1. Find coffee name from params - URL
// 2. find the right object from our db - that has the same name. 
// 3. Show all the object data to the user. 

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../firebase-config'
import { collection, getDocs} from "firebase/firestore";
import { Card, Image, Button, Container } from 'react-bootstrap'


export default function MyRing() {
  let params = useParams();
  const [ring, setRing] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "jewelry")).then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().name === params.ringName)
        {
          setRing({...doc.data(), id: doc.id});
        }
      })
    })
  }, [params.ringName])

  return (
    <Container style={{width: '100vw', marginTop: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <Card style={{width: "14vw", height: '27vw'}}>
        <Image style={{objectFit: 'cover'}} height={250} src={ring?.image} className="card-img-top" alt="..."/>
        <Card.Body>
            <h5 className="card-title">{ring?.name}</h5>
            <Card.Text className="card-text">Price: {ring?.price}₪<br/>In Stock: {!ring?.isInStock ? '❌' : '✅'}</Card.Text>
            <Button href={`/item/${ring?.id}`} style={{width: '100%'}}>Buy now</Button>
        </Card.Body>
    </Card>
  </Container>
  )
}