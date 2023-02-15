import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Items() {
  return (
    <div style={{marginTop: 20}} className='container'>
      <h5 className='text-center'>Our jewelry</h5>
      <Button className='btn btn-light m-1'>
        <Link to='/items/rings' className='nav-link'>Rings</Link>
      </Button>
      <Button className='btn btn-light m-1'>
        <Link to='/items/chains' className='nav-link'>Chains</Link>
      </Button>
      <Button className='btn btn-light m-1'>
        <Link to='/items/earrings' className='nav-link'>Earrings</Link>
      </Button>

      <Outlet/>
    </div>
  )
}