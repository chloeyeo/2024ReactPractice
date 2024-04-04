import React, { useState } from "react";
import ModalView from "./components/ModalView";
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

  function handleClick(index) {
    setOpenModal(!openModal);
    setClickedIndex(index);
  }

  return (
    <>
      <div className="listItems">
        <ul>
          {viewList.map((item, index) => {
            return (
              <li
                onClick={() => {
                  handleClick(index);
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
        <ModalView
          setOpenModal={setOpenModal}
          viewList={viewList}
          clickedIndex={clickedIndex}
        />
      ) : null}
    </>
  );
};

export default App;
