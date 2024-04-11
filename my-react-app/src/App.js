import React from "react";
import "./assets/css/tailwindStyle.css";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";

// ctrl+shift+w + div.box

function reducer(state, action) {
  // state is the initialState we passed into store along with reducer
  // console.log(state); // object -> num:0
  return state;
}

const initialState = { num: 0 };

const store = createStore(reducer, initialState);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="box border p-4">
          <h3>title1</h3>
          <h1>
            <ChildOne />
          </h1>
        </div>
      </Provider>
    </>
  );
};

function ChildOne() {
  return (
    <>
      <div className="box border p-4">
        <h3>childone</h3>
        <ChildTwo />
      </div>
    </>
  );
}

function ChildTwo() {
  // state is initialState passed into store
  const num = useSelector((state) => {
    return state.num;
  });
  // console.log(num);
  return (
    <>
      <div className="box border p-4">
        <h3>childtwo</h3>
        number({num})
      </div>
    </>
  );
}

export default App;
