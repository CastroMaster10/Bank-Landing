import React,{Component} from 'react';
import Main from '../components/Main'
import Maincards from '../components/Maincards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Secondcards from '../components/Secondcards';
import '../assets/styles/Home.css';
const Home = () => {   
    

        return (
          <div>
            <Main />
            <Container>
              <Row>
                <Col lg={3} xs={12}>
                  {" "}
                  <Maincards />{" "}
                </Col>
                <Col lg={3} xs={12}>
                  {" "}
                  <Maincards />{" "}
                </Col>
                <Col lg={3} xs={12}>
                  {" "}
                  <Maincards />{" "}
                </Col>
                <Col lg={3} xs={12}>
                  {" "}
                  <Maincards />{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="h3">Lastest Articles</h3>
                </Col>
              </Row>
              <Row>
                <Col lg={3} xs={12}>
                  {" "}
                  <Secondcards />{" "}
                </Col>
                <Col lg={3} xs={12}>
                  {" "}
                  <Secondcards />{" "}
                </Col>
                <Col lg={3} xs={12}>
                  {" "}
                  <Secondcards />{" "}
                </Col>
                <Col lg={3} xs={12}>
                  {" "}
                  <Secondcards />{" "}
                </Col>
              </Row>
            </Container>
          </div>
        );
   
}

export default Home;