import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [test, setTest] = useState("initial");
  function testChange(msg) {
    setTest(msg);
  }
  console.log("component re-renders since state changed");
  return (
    <>
      <h1>{test}</h1>
      <button
        className="btn primary"
        onClick={() => {
          testChange("yeo");
        }}
      >
        Click A
      </button>
      <button
        className="btn"
        onClick={() => {
          testChange("chloe");
        }}
      >
        Click B
      </button>
    </>
  );
}

export default App;
