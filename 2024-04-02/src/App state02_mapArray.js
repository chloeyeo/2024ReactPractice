import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [title, setTitle] = useState(["Seoul", "Incheon", "Busan"]);

  // spread (...) syntax:
  const array = [1, 2, 3];
  const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
  console.log(obj);
  console.log(obj[0]);

  function changeTitle() {
    // alert("test");
    let newArr = [...title]; // deep copy = distinct copy from original
    newArr[0] = "Gyeonggi";
    newArr[1] = "Busan";
    newArr[2] = "Sungnam";
    setTitle(newArr);
  }
  function addTitle() {
    let newArr = [...title];
    newArr.push("Jeju");
    setTitle(newArr);
  }
  return (
    <div>
      <div>
        {title.map((region) => {
          return (
            <>
              {region}
              <br />
            </>
          );
        })}
      </div>
      <button className="btn primary" onClick={addTitle}>
        Add Region
      </button>
      {/* otherwise div itself is block level display block
      so we change it to inline block otherwise button will take full width of screen
      as block is one entire row */}
      <div
        className="btn"
        style={{ display: "inline-block" }}
        onClick={changeTitle}
      >
        Change Region
      </div>
    </div>
  );
};

export default App;
