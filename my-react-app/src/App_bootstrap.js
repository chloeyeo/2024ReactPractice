import React from "react";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="container" style={{ background: "skyblue" }}>
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
        </div>
      </div>
      {/* </> self closing tag is used when component doesn't have any nested children. 
      JSX allows self-closing syntax for elements, including <div>, <span>, and others. */}
      <Navbar />
    </div>
  );
};

export default App;
