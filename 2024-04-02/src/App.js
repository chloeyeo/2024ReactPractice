import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [data] = useState([
    "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic?",
    "2.Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic?",
    "3.Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic?",
  ]);

  return (
    <>
      <h1>Tab Menu</h1>
      <ul className="tabs">
        {data.map((_, index) => {
          return (
            <li
              className={index === num ? "active" : ""}
              onClick={() => {
                setNum(index);
              }}
            >
              Tab{index + 1}
            </li>
          );
        })}
      </ul>
      {data.map((data, index) => {
        return <p>{index === num ? data : ""}</p>;
      })}
    </>
  );

  // return (
  //   <>
  //     <h1>Tab Menu</h1>
  //     <ul className="menu">
  //       {data.map((_, index) => {
  //         return (
  //           <>
  //             <li
  //               className={`tab ${index === num ? "active" : ""}`}
  //               onClick={() => {
  //                 setNum(index);
  //               }}
  //             >
  //               Tab{index + 1}
  //             </li>
  //           </>
  //         );
  //       })}
  //     </ul>
  //     {data.map((data, index) => {
  //       return <h3>{index === num ? data : ""}</h3>;
  //     })}
  //   </>
  // );
};

export default App;
