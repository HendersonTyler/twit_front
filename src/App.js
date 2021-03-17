import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";

import Home from "./components/Home";
import User from "./components/User";

function App() {
  const [userName, setUserName] = useState("");

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
      </Navbar>
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
