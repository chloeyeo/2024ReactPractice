import React from "react";

const MyProps = ({ myData, product, run }) => {
  return (
    <>
      <div className="wrap">
        MyProps: {myData} Product: {product[0].title},{product[0].price}
        <div className="imgWrap">
          <img src={`./images/${product[0].img}`} alt="" />
        </div>
        <button onClick={run}>Click</button>
      </div>
    </>
  );
};

export default MyProps;
