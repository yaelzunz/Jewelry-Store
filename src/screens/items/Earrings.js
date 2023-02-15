import React, { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs} from "firebase/firestore";
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'react-bootstrap'



export default function Earrings() {
  const [earrings, setEarrings] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "jewelry")).then(snapshot => {
      let temp = []
      snapshot.forEach(doc => {
        if (doc.data().category === 'Earrings')
        {
          temp = [...temp, doc.data()]
        }
        setEarrings(temp)
      })
    })
  }, [])

  return (
    <div style={{marginTop: 30}}>
      <h5>Pick your favorite earring</h5>

      {earrings.map(earrings =>(
        <Button className='btn btn-dark m-1' key={earrings.id}>
        <Link to={`/items/Earrings/${earrings.name}`}
         className='nav-link'>{earrings.name}</Link>
      </Button>
      ))}

      <Outlet/>
    </div>
  )
}