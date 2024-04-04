import React, { useState } from "react";
import "./assets/css/style.scss";
// 1. npm i sass
// 2. create style.scss file in css folder in assets folder in src folder.
// 3. import style.scss file from App.js

const App = () => {
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);
  function clickHandler() {
    setClicked(true);
  }
  function inputHandler(event) {
    setName(event.target.value);
    setClicked(false);
  }
  return (
    <>
      <div>
        {/* with htmlFor, when click on label, the input with id name gets lighted up for user to input */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            inputHandler(event);
          }}
          placeholder="Type your name here..."
        />
      </div>
      <div>
        <button onClick={clickHandler}>Submit</button>
        {name && clicked ? <h3>Your name is {name}</h3> : null}
      </div>
    </>
  );
};

export default App;
