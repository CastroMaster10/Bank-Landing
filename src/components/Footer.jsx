import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/images/logo.svg";
import Button from 'react-bootstrap/Button';
import '../assets/styles/Footer.css'
const Footer = () => {
    return(
<footer>

<Container>
    <Row>
        <Col lg= {3}>
            <img src={logo} alt="imagen-logo"/>

        </Col>
        <Col>
                   
         <a href="">About us</a>
         <a href="">Contact</a>
         <a href="">Blog</a>
       
        </Col>
        <Col>
        
        <a href="">Careers</a>
        <a href="">Support</a>
        <a href="">Privacy Policy</a>
       
        </Col>
        <Col>
            <Button>
                Request Invite  
            </Button>
        
        
        </Col>
    </Row>
</Container>
</footer>
    )
}

export default Footer;