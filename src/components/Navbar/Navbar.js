import React from 'react'
import logo from '../../img/logo.png';
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap'
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
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Categories</Nav.Link>
        <Nav.Link href="#">
          Contact
        </Nav.Link>
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