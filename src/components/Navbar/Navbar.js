import React from 'react'
import logo from '../../images/logo.png';
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Header(props) {
  return (
<Navbar bg="light" expand="lg">
  <Container fluid>
    <img src={logo} alt="Header logo" />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      > 
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/">Categories</Link>
        <Link className='nav-link' to="/">Contact</Link>

      </Nav>
      <Form id="searchForm" className="d-flex">
        <FormControl
          id='search'
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={() => props.manageChange()}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default Header