import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-center'>Welcome to our jewelry store</h1>
      <img height={500} width={400} src="https://i.pinimg.com/564x/1b/69/03/1b6903976ff9de2394109865f9afaf11.jpg" alt='img'/>
      <br></br><br></br>
      <h3 className='text-center'>Our jewelry</h3>
      <button className='btn btn-dark m-2'>
        <Link to='/items' className='nav-link'>Items</Link>
      </button>
      <Outlet/>
    </div>
  )
}