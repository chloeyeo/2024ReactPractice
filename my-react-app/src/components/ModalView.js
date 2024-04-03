const ModalView = (props) => {
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
export default ModalView;
