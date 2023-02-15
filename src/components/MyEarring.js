import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../firebase-config'
import { collection, getDocs} from "firebase/firestore";
import { Card, Image, Button, Container } from 'react-bootstrap'


export default function MyEarring() {
  let params = useParams();
  const [earring, setEarring] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "jewelry")).then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().name === params.earringName)
        {
          setEarring({...doc.data(), id: doc.id});
        }
      })
    })
  }, [params.earringName])

  return (
    <Container style={{width: '100vw', marginTop: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Card style={{width: "14vw", height: '27vw'}}>
          <Image style={{objectFit: 'cover'}} height={250} src={earring?.image} className="card-img-top" alt="..."/>
          <Card.Body>
              <h5 className="card-title">{earring?.name}</h5>
              <Card.Text className="card-text">Price: {earring?.price}₪<br/>In Stock: {!earring?.isInStock ? '❌' : '✅'}</Card.Text>
              <Button href={`/item/${earring?.id}`} style={{width: '100%'}}>Buy now</Button>
          </Card.Body>
      </Card>
    </Container>
  )
}