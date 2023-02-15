import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { db } from '../../firebase-config'
import { collection, getDocs} from "firebase/firestore";
import { Button } from 'react-bootstrap'

export default function Chains() {
  const [chains, setChains] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "jewelry")).then(snapshot => {
      let temp = []
      snapshot.forEach(doc => {
        if (doc.data().category === 'Chains')
        {
          temp = [...temp, doc.data()]
        }
        setChains(temp)
      })
    })
  }, [])

  return (
    <div style={{marginTop: 30}}>
      <h5>Pick your favorite chain</h5>

      {chains.map(chains =>(
        <Button className='btn btn-dark m-1' key={chains.id}>
          <Link to={`/items/Chains/${chains.name}`}
           className='nav-link'>{chains.name}</Link>
        </Button>
      ))}

      <Outlet/>



    </div>
  )
}