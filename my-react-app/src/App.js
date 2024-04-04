import React, { useState } from "react";
import "./assets/css/style.scss";
import ListDataModal from "./components/ListDataModal";
// 1. npm i sass
// 2. create style.scss file in css folder in assets folder in src folder.
// 3. import style.scss file from App.js

const App = () => {
  const [viewData, setViewData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  function submitHandler() {
    setClicked(true);
    let newViewData = [...viewData];
    // list.push(item) pushes item to END of list,
    // but list.unshift(item) pushes item to FRONT of list!
    // problem with unshift() is that it takes out all the existing data in list
    // THEN puts newData at front then adds all exisitng data back into list
    // so unshift() takes up more memory! so is not good practice.
    newViewData.push(name);
    setViewData(newViewData);
    setName(""); // to clear input data in <input>
    // console.log(viewData);
  }
  function inputHandler(event) {
    setName(event.target.value);
    setClicked(false);
  }
  function listClickHandler(index) {
    setOpenModal(!openModal);
    setListIndex(index);
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
        <button onClick={submitHandler}>Submit</button>
      </div>
      <div className="listArea">
        {name && clicked ? <h3>Your name is {name}</h3> : null}
        <ul className="dataList">
          {viewData.map((data, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  listClickHandler(index);
                }}
              >
                {index + 1}. {data}
              </li>
            );
          })}
        </ul>
        {openModal ? (
          <ListDataModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            dataList={viewData}
            listIndex={listIndex}
          />
        ) : null}
      </div>
    </>
  );
};

export default App;
