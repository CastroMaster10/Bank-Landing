import React from 'react';
import Card from "react-bootstrap/Card";
import currency from '../assets/images/image-currency.jpg'
import Badge from 'react-bootstrap/Badge';
import '../assets/styles/Secondcards.css';

const Secondcards = () => {
return (
  
  <div className="secondcards-container">
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" alt="currency-img" src={currency} />
    <Card.Body>
      <Badge  variant="light">Light</Badge> 
      <Card.Title>
        Recieve money in any currency <br /> with no fees
      </Card.Title>
      <Card.Text>
        The world is getting smaller and <br />
        we`re becoming more mobile. So
        <br />
        why should you be forced to only recieve <br />
        money in a single...
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
);
}

export default Secondcards;