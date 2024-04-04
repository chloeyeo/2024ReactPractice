import React, { useState } from "react";
import "./assets/css/style.scss";
// 1. npm i sass
// 2. create style.scss file in css folder in assets folder in src folder.
// 3. import style.scss file from App.js

const App = () => {
  const [viewData, setViewData] = useState([]);
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);
  function clickHandler() {
    setClicked(true);
    let newViewData = [...viewData];
    // list.push(item) pushes item to END of list,
    // but list.unshift(item) pushes item to FRONT of list!
    newViewData.unshift(name);
    setViewData(newViewData);
    console.log(viewData);
  }
  function inputHandler(event) {
    setName(event.target.value);
    setClicked(false);
  }
  return (
    <>
      <div className="inputArea">
        {/* with htmlFor, when click on label, the input with id name gets lighted up for user to input */}
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            inputHandler(event);
          }}
          placeholder="Type your name here..."
          value={name}
        />
      </div>
      <div className="buttonTextArea">
        <button onClick={clickHandler}>Submit</button>
        {name && clicked ? <h3>Your name is {name}</h3> : null}
        <ul className="dataList">
          {viewData.map((data, index) => {
            return (
              <li>
                {index + 1}. {data}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
