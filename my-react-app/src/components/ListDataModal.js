import React from "react";

const ListDataModal = (props) => {
  return (
    <div className="modalWrap">
      <div className="modal">
        {/* <h1>{props.dataList[props.listIndex].name}:</h1> */}
        <h1>{props.dataList[props.listIndex].name}</h1>
        <p>{props.dataList[props.listIndex].description}</p>
        <button className="btn close" onClick={props.closeModal}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default ListDataModal;
