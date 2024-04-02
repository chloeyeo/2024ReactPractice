import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [test, setTest] = useState("chloe");
  function testChange() {
    alert("clicked");
    setTest("Yeo");
  }
  return (
    <>
      <h1>{test}</h1>
      <button className="btn primary" onClick={testChange}>
        Click
      </button>
    </>
  );
}

export default App;
