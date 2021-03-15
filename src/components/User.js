import { useState, useEffect } from "react";
import axios from "axios";

const User = ({ userName }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const getData = async () => {
      const results = await axios(`http://localhost:5000/user/${userName}`);
      setUserDetails(results.data);
    };
    getData();
  }, []);

  console.log(userDetails);

  return (
    <div>
      {userDetails.profileImage === undefined ? (
        <p>loading</p>
      ) : (
        <>
          <h2>{userDetails.name}</h2>
          <img alt="profile" src={userDetails.profileImage} />
        </>
      )}
    </div>
  );
};

export default User;
