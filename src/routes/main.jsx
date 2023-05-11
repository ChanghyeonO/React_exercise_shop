import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import React from "react";

const Main = props => {
  return (
    <>
      <div className="main-background"></div>
      <Container>
        <Row>
          {props.shoes.map((a, i) => {
            return <Card shoes={props.shoes[i]} i={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

const Card = props => {
  return (
    <Col>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
};

export default Main;
