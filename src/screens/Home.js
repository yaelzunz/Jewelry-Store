import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-center'>Welcome to our jewelry store</h1>
      <img height={500} width={500} src="https://i.pinimg.com/564x/1d/fa/37/1dfa37d940ed4c21ac04f09869c611c4.jpg" alt='img'/>
      <br></br><br></br>
      <h3 className='text-center'>Our jewelry</h3>
      <button className='btn btn-dark m-2'>
        <Link to='/items' className='nav-link'>Items</Link>
      </button>
      <Outlet/>
    </div>
  )
}