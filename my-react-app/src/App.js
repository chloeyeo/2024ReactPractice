import React, { useState, useEffect } from "react";
import axios from "axios"; // npm i axios
import "./assets/css/style03.scss"; // npm i sass

const App = () => {
  const [myData, setMyData] = useState(10);
  const [product, setProduct] = useState([
    { title: "상품1", price: "1000", img: "img1.jpg" },
    { title: "상품2", price: "2000", img: "img2.jpg" },
  ]);
  return (
    <>
      <div className="wrap">
        test
        <MyProps myData={myData} product={product} />
      </div>
    </>
  );
};

function MyProps({ myData, product }) {
  return (
    <>
      <div className="wrap">
        MyProps: {myData} Product: {product[0].title},{product[0].price}
        <div className="imgWrap">
          <img src={`./images/${product[0].img}`} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
