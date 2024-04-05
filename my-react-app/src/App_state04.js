import React, { useState, useEffect } from "react";
import "./assets/css/style03.scss"; // npm i sass

const App = () => {
  const [num, setNum] = useState(0);
  const [inputData, setInputData] = useState("");
  const [myData, setMyData] = useState("");
  console.log("자료변경");
  useEffect(
    function callback() {
      console.log("effect"); // only prints on initial render, but Not on subsequent re-renders due to state update, only if empty dependency list given.
      // if dependency list not given at all, useEffect renders on every re-render, so must put an empty dependency list to prevent this.
    },
    [myData]
  );
  function inputChange(event) {
    console.log(event.target.value);
    setInputData(event.target.value);
  }
  function sendData(event) {
    setMyData(inputData);
  }
  return (
    <>
      {num} / {inputData}
      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Click
        </button>
        <div>
          <input type="text" onChange={inputChange} />
          <button onClick={sendData}>자료전송</button>
          <br />
          자료전송내용: {myData}
        </div>
      </div>
      <img src="./images/img1.jpg" alt="img1" />
    </>
  );
};

export default App;
