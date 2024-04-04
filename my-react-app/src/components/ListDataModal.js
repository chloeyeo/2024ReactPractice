import React from "react";

const ListDataModal = (props) => {
  return (
    <div className="modalWrap">
      <div className="modal">
        <h3>{props.dataList[props.listIndex]}</h3>
        <button
          className="btn close"
          onClick={() => {
            props.setOpenModal(false);
          }}
        >
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default ListDataModal;
