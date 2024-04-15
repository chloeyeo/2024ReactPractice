import React from "react";
import "./assets/css/tailwindStyle.css";
import Counter from "./components/Counter";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector, Provider } from "react-redux";
// provider is at the outermost component => index.js

// const obj = {
//   name: "sonata",
//   run: (num) => {
//     console.log(num);
//   },
// };

// obj.run(1);

const counterStore = createSlice({
  name: "countNum",
  initialState: { num: 100 },
  reducers: {
    up: (state, action) => {
      state.num += action.payload;
    },
  },
}); // receives an object {} whose key-value pairs can be anything
const store = configureStore({
  reducer: { counter: counterStore.reducer }, // {} object of STATES
}); // counter is state, counterStore is the 'slice' of store used in redux toolkit
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>test</h1>
        <ChildOne />
      </div>
    </Provider>
  );
};

const ChildOne = () => {
  const num = useSelector((state) => {
    return state.counter.num;
  });
  return <div>ChildOne num: {num}</div>;
};

export default App;
