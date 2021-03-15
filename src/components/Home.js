import { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Home({ userName, setUserName }) {
  const [userInput, setUserInput] = useState("");

  const submitUser = (e) => {
    e.preventDefault();
    setUserName(userInput);
  };

  const userTyped = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <Form onSubmit={submitUser}>
        <Row>
          <Col className="text-right pr-0">
            <h2>@</h2>
          </Col>
          <Col>
            <FormControl
              onChange={userTyped}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col></Col>
        </Row>
        <Button type="submit" className="m-3">
          Click Me
        </Button>
      </Form>
    </>
  );
}

export default Home;
