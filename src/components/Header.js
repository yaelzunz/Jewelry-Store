import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return <Navbar style={{height: '10vh'}} bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Jewelry Store</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/additem">Add Item</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/items">Items</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            </Container>
            <Outlet/>
        </Navbar>
}