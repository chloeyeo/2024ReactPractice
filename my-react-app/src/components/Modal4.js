import React from "react";

const Modal4 = (props) => {
  return (
    <div className="modalWrap">
      <div className="modal">
        <h5>
          Title:
          <br />
          {props.posts[props.clickedIndex].title}
        </h5>
        <p>{props.posts[props.clickedIndex].body}</p>
        <button className="btn close" onClick={props.closeModal}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default Modal4;
