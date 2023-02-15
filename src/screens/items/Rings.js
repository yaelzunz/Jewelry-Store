import React, { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs} from "firebase/firestore";
import { Link, Outlet } from 'react-router-dom'
import {  Button } from 'react-bootstrap'

export default function Rings() {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "jewelry")).then(snapshot => {
      let temp = []
      snapshot.forEach(doc => {
        if (doc.data().category === 'Rings')
        {
          temp = [...temp, doc.data()]
        }
        setRings(temp)
      })
    })
  }, [])

  return (
    <div style={{marginTop: 30}}>
      <h5>Pick your favorite ring</h5>

      {rings.map(ring =>(
        <Button className='btn btn-dark m-1' key={ring.id}>
        <Link to={`/items/Rings/${ring.name}`}
         className='nav-link'>{ring.name}</Link>
      </Button>
      ))}

      <Outlet/>
    </div>
  )
}