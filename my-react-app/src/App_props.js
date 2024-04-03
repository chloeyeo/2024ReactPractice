import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <div className="wrap">
        parent container {num}
        <Child num={num} setNum={setNum} />
      </div>
    </>
  );
};

function Child(props) {
  console.log("props:", props); // props is an object: {num: , setNum:function}
  return (
    <>
      <div className="wrap">
        child container one {props.num}{" "}
        <button
          onClick={() => {
            props.setNum(props.num + 1);
          }}
        >
          update num
        </button>
        <GrandChild num={props.num} setNum={props.setNum} />
      </div>
    </>
  );
}

function GrandChild(props) {
  return (
    <>
      <div className="wrap">
        grand child container {props.num}{" "}
        <button
          onClick={() => {
            props.setNum(props.num + 1);
          }}
        >
          update num
        </button>
      </div>
    </>
  );
}

export default App;
