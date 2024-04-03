import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  let viewList = [
    {
      title: "tiger",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam esse harum sint inventore ut iste placeat animi facilis numquam!",
    },
    {
      title: "gorilla",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam esse harum sint inventore ut iste placeat animi facilis numquam!",
    },
    {
      title: "giraffe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam esse harum sint inventore ut iste placeat animi facilis numquam!",
    },
    {
      title: "lion",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam esse harum sint inventore ut iste placeat animi facilis numquam!",
    },
    {
      title: "dog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam esse harum sint inventore ut iste placeat animi facilis numquam!",
    },
  ];

  return (
    <>
      <div className="listItems">
        <ul>
          {viewList.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setOpenModal(!openModal);
                  setClickedIndex(index);
                }}
              >
                <h3>
                  {index + 1}. {item.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
      {openModal ? (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          viewList={viewList}
          clickedIndex={clickedIndex}
        />
      ) : null}
    </>
  );
};

const Modal = (props) => {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <h3>
            {props.clickedIndex + 1}. {props.viewList[props.clickedIndex].title}
          </h3>
          <p>{props.viewList[props.clickedIndex].content}</p>
          <button
            className="btn close"
            onClick={() => {
              props.setOpenModal(!props.openModal);
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
