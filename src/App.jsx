import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./main";
import Detail from "./detail";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰~</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
