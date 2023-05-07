import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';


function App() {

  const [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰~</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-background'></div>

      <Container>
        <Row>
          {
            shoes.map((a, i) => {
              return (
                <Card shoes={shoes[i]} i={i} />
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

const Card = (props) => {
  return (
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
