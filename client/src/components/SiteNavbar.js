import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav, {} from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'



const SiteNavbar = () => {
    return (
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Esperanto</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="About us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.linkedin.com/in/alibeniaminali/" target="_blank">Ali Ali</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Dougie Brown</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Peter Bid</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Elena Gicheva</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">About this website</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    <Nav> 
      <Link to="/teachers" className='btn btn-light'>Find Teachers</Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}


export default SiteNavbar