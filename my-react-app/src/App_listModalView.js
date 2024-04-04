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
  const [description, setDescription] = useState("");
  // const [clicked, setClicked] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  function submitHandler() {
    // setClicked(true);
    let newViewData = [...viewData];
    // list.push(item) pushes item to END of list,
    // but list.unshift(item) pushes item to FRONT of list!
    // problem with unshift() is that it takes out all the existing data in list
    // THEN puts newData at front then adds all exisitng data back into list
    // so unshift() takes up more memory! so is not good practice.
    newViewData.push({ name: name, description: description });
    setViewData(newViewData);
    setName(""); // to clear input data in <input>
    setDescription("");
    // console.log(viewData);
  }
  function nameHandler(event) {
    setName(event.target.value);
    // setClicked(false);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
    // setClicked(false);
  }
  function listClickHandler(index) {
    setOpenModal(true);
    setListIndex(index);
  }
  function closeModal() {
    setOpenModal(false);
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
            nameHandler(event);
          }}
          placeholder="Type your name here..."
          value={name}
        />
        <label htmlFor="description">Type your description here...</label>
        <textarea
          id="description"
          rows="10"
          placeholder="Start typing here..."
          value={description}
          onChange={(event) => {
            descriptionHandler(event);
          }}
        />
        <button onClick={submitHandler}>Submit</button>
      </div>
      <div className="listArea">
        <ul className="dataList">
          {viewData.map((object, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  listClickHandler(index);
                }}
              >
                {index + 1}. {object.name}
              </li>
            );
          })}
        </ul>
        {openModal ? (
          <ListDataModal
            openModal={openModal}
            closeModal={closeModal}
            dataList={viewData}
            listIndex={listIndex}
          />
        ) : null}
      </div>
    </>
  );
};

export default App;
