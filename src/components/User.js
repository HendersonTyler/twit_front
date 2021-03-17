import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const User = ({ userName }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    try {
      const getData = async () => {
        const results = await axios(`http://localhost:5000/user/${userName}`);
        setUserDetails(results.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, []);

  const graphOptions = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };

  return (
    <div className="makeTall">
      {userDetails === "error" ? (
        <p className="text-white">
          Sorry, we couldn't find that user. Please try again.
        </p>
      ) : userDetails.profileImage === undefined ? (
        <p className="text-white">loading</p>
      ) : (
        <div>
          <Row className="alignCenter">
            <Col>
              <h1 className="text-white">{userDetails.name}</h1>
              <img
                className="pt-3"
                alt="profile"
                src={userDetails.profileImage}
              />
            </Col>
            <Col style={{ paddingTop: "20vh" }}>
              {userDetails.sentiment.score > 0 ? (
                <p className="h2">😊</p>
              ) : (
                <p className="h2">🙁</p>
              )}
              <h3 className="cyan">Score: {userDetails.sentiment.score}</h3>
              <div>
                <ReactWordcloud
                  words={userDetails.cloud}
                  options={graphOptions}
                  callbacks={{
                    getWordColor: (word) =>
                      word.value > 0.1 ? "white" : "cyan",
                  }}
                />
              </div>
            </Col>
          </Row>

          <h4 className="text-white">Calculation:</h4>
          {userDetails.sentiment.calculation.map((x, index) => (
            <p className="text-white" key={index}>
              {JSON.stringify(x).replace(/"|{|}/g, "")}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
