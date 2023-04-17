// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((shoe, idx) => {
            return <Card shoe={shoe} idx={idx + 1} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <div>
        <img src={'/img/shoes' + props.idx + '.jpg'} width="80%" alt="shoes1" />
        <h4>{props.shoe.title}</h4>
        <p>{props.shoe.content}</p>
      </div>
    </Col>
  );
}

export default App;
