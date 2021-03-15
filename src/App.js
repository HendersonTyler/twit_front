import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Home from "./components/Home";
import User from "./components/User";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <Container className="text-center">
      <h1>Twit Thinker</h1>
      {userName === "" ? (
        <Home userName={userName} setUserName={setUserName} />
      ) : (
        <User userName={userName} />
      )}
    </Container>
  );
}

export default App;
