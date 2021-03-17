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
        <Row className="alignCenter">
          <Col>
            <h1 className="text-white">Are you happy?</h1>
            <h3 className="cyan">Enter a twitter handle</h3>
          </Col>
          <Col>
            <Row>
              <Col className="text-right">
                <h2 className="text-white">@</h2>
              </Col>
              <Col>
                <FormControl
                  onChange={userTyped}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Button type="submit" className="cyan" variant="outline-light">
          Search
        </Button>
      </Form>
    </>
  );
}

export default Home;
