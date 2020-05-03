import React from 'react';
import Card from 'react-bootstrap/Card'
import icon from '../assets/images/icon-online.svg';
import '../assets/styles/Maincards.css'

const Maincards = () => {
    return (
           <div className= "maincards-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={icon} className="img-secondcards" />
          <Card.Body>
            <Card.Title>Online Banking</Card.Title>
            <Card.Text>
              Our modern web and mobile <br />
              and mobile application allows you to keep <br />
              track of your finances wherever you <br />
              are in the world.
          </Card.Text>

          </Card.Body>
        </Card>
           </div>
         
    );
}

export default Maincards;