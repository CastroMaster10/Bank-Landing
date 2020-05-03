import React from 'react';
import mockups from '../assets/images/image-mockups.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/styles/Main.css';


const Main = () => {

    return (
      <section className= "main">

      <Container>
        <Row>
          <Col className= "main-title" lg= {5} xs={12}>
            <h1> Next generation <br/> digital banking </h1>
            <p>
              Take your financial life online. Your Easybank account <br />
              will be a one-stop shop for spending,saving, <br />
              budgeting, investing, and much more!
            </p>
            <button className="main-button"> Request invite</button>
          </Col>
          <Col className= "main-img" lg={7} xs={12}>
            <img src={mockups} alt="main-image" />
          </Col>
           </Row>
          <Row>
            <Col className="sub-title" lg={12} xs={12}>
              <h3>Why choose Easybanks</h3>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub <br />
                control your finances like never before.    
              </p>
            </Col>  
          </Row>
          
    </Container>
      </section>
    );
}

export default Main;
   