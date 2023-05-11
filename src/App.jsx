import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./routes/main";
import Detail from "./routes/detail";
import About from "./routes/about";
import data from "./data";

function App() {
  const [shoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            쇼핑몰~
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Main
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route
            path="event/one"
            element={<h4>첫 주문시 양배추즙 서비스~</h4>}
          />
          <Route
            path="event/two"
            element={<h4>생일 기념 쿠폰받기랍니다~</h4>}
          />
        </Route>
        <Route
          path="*"
          element={<h1>여긴 없는 페이지입니다. 돌아가세요.</h1>}
        />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
