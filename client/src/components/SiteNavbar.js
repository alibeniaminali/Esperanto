import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'

const SiteNavbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('teachers-token')
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Esperanto.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/alibeniaminali/"
                target="_blank"
              >
                Ali Ali
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/dougieb/"
                target="_blank"
              >
                Dougie Brown
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/peter-bid-b224185a"
                target="blank"
              >
                Peter Bid
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/elenagicheva/"
                target="blank"
              >
                Elena Gicheva
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/aboutus">
                About This Website
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/alibeniaminali/project-3"
                target="blank"
              >
                GitHub Repo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {userIsAuthenticated() ?
            <Nav>
              <Nav.Link href='/addteacher'>
                Become A Teacher
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
            :
            <>
              <Nav>
                <Link to="/teachers" className="btn btn-light">
                  Find Teachers
                </Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
              </Nav>
            </>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar