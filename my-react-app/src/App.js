import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <div className="wrap">parent component {num}</div>
    </>
  );
};

export default App;
