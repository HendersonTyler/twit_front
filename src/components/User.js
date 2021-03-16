import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const User = ({ userName }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const getData = async () => {
      const results = await axios(`http://localhost:5000/user/${userName}`);
      setUserDetails(results.data);
    };
    getData();
  }, []);

  const graphOptions = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };

  return (
    <div>
      {userDetails.profileImage === undefined ? (
        <p>loading</p>
      ) : (
        <>
          <h2>{userDetails.name}</h2>
          <img alt="profile" src={userDetails.profileImage} />
          <Row>
            <Col></Col>
            <Col>
              <ReactWordcloud
                words={userDetails.cloud}
                options={graphOptions}
              />
            </Col>
            <Col></Col>
          </Row>

          <h3>Score: {userDetails.sentiment.score}</h3>
          <h4>Calculation:</h4>
          {userDetails.sentiment.calculation.map((x, index) => (
            <p key={index}>{JSON.stringify(x).replace(/"|{|}/g, "")}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default User;
