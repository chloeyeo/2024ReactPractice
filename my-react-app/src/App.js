import React, { useState, useEffect } from "react";
import "./assets/css/tailwindStyle.css";
import axios from "axios";
import { getUser } from "./api/api";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // cannot put async keyword directly to useEffect!
    // so should create another function inside useEffect e.g. callApi
    // and put async keyword to That function.
    const callApi = async () => {
      try {
        // const user = await axios.get("http://localhost:4000/user");
        const user = await getUser(); // need to add another await here!!
        // getUser itself has await to await the data coming in
        // and once that data came in we also call getUser here to
        // bring that loaded data into user so we need another await to wait for that!
        console.log(user);
        console.log(user.users);
        setUserData(user.users);
        console.log(userData);
      } catch (error) {
        console.error(error.message);
      }
    };
    callApi();
    setUserData([]);
  }, []);
  return (
    <div>
      {userData?.map((item, index) => {
        return <li key={index}>{item.email}</li>;
      })}
    </div>
  );
}

export default App;
