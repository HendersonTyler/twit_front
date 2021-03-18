import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "./logo.svg";

import Home from "./components/Home";
import User from "./components/User";

function App() {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top filterCyan"
          />{" "}
          Twit Gauge
        </Navbar.Brand>
        <Nav.Item className="ml-auto pr-md-5 navbar-nav">
          <Button variant="outline-light" onClick={handleShow}>
            About
          </Button>
        </Nav.Item>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Twit Gauge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Twit Gauge is built on Node.js and React. It takes a Twitter handle
            and uses Twitter's API to return the user's ID, description and
            profile photo. It then hits Twitter's API again for the past 20
            tweets.
            <br />
            <br />
            <a href="https://qminer.github.io/">Qminer</a> then tallies up how
            many times words are used, which is then past onto the front-end for
            <a href="https://react-wordcloud.netlify.app/"> wordcloud</a> to
            create a visual representation.{" "}
            <a href="https://github.com/thisandagain/sentiment">Sentiment</a>{" "}
            then calculates a score based on a list of positive or negative
            words.
            <br />
            <br />
            This project's GitHub can be seen here:
            <br />{" "}
            <a href="https://github.com/HendersonTyler/twit_front">
              Front
            </a>{" "}
            <br />
            <a href="https://github.com/HendersonTyler/twit_count_server">
              Back
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="text-center">
        {userName === "" ? (
          <Home userName={userName} setUserName={setUserName} />
        ) : (
          <User userName={userName} />
        )}
      </Container>
    </>
  );
}

export default App;
