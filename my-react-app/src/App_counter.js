import React from "react";
import "./assets/css/tailwindStyle.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector, Provider } from "react-redux";
// provider is at the outermost component => index.js

const App = () => {
  const data = {
    num: 10,
  };

  return (
    <div>
      <Counter data={data} />
    </div>
  );
};

export default App;
