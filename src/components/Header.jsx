import React from 'react';
import logo from '../assets/images/logo.svg';
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import '../assets/styles/Header.css';

const Header = () => {
   
  return (
      <div className= "nav-container">
        <Navbar  variant="light">
        <Navbar.Brand className="nav-logo" href="#home">
          <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Nav className="mr-auto nav-group">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="#pricing">Careers</Nav.Link>
        </Nav>
        
        <Form inline>
           <button className="nav-button">Request invite</button>
        </Form>
      </Navbar>
      </div>
    );
}

export default Header;