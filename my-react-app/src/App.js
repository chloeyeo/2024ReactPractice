import React, { useState } from "react";
import MyProps from "./components/MyProps";
import "./assets/css/style03.scss"; // npm i sass

const App = () => {
  const [myData] = useState(10);
  const [product] = useState([
    { title: "상품1", price: "1000", img: "img1.jpg" },
    { title: "상품2", price: "2000", img: "img2.jpg" },
  ]);
  function test() {
    console.log("test");
  }
  return (
    <>
      <div className="wrap">
        test
        <MyProps myData={myData} product={product} run={test} />
      </div>
    </>
  );
};

export default App;
