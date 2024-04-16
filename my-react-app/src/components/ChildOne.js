import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterStore from "../store/counterSlice";

function ChildOne() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);
  return (
    <div>
      <h1>ChildOne num:{num}</h1>
      <button
        onClick={() => {
          // up is action type
          // action = {type: 'counter/up', payload: 1}
          dispatch(counterStore.actions.up(1)); // 1 is action.payload
        }}
      >
        increment
      </button>
    </div>
  );
}

export default ChildOne;
