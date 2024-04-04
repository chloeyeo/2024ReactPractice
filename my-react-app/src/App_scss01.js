import React from "react";
import "./assets/css/style02.scss";

const App = () => {
  return (
    <>
      <div className="box">test</div>
      <div className="box1 active">
        test1
        <div className="active">
          active child
          <div className="active">active grandchild</div>
        </div>
      </div>
    </>
  );
};

export default App;
