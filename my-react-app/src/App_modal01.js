import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <button
          className="btn primary"
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Open Modal
        </button>
      </div>
      {openModal ? (
        // this attributes of Modal will be contained in props object
        // passed into Modal
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </>
  );
};

const Modal = (props) => {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          Modal Window
          <button
            className="btn"
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
