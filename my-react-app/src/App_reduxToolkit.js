import React from "react";
import "./assets/css/tailwindStyle.css";
// Redux is a state management library for JavaScript applications, commonly used with React.
import { useDispatch, useSelector, Provider } from "react-redux";
// Redux Toolkit is a package that simplifies Redux usage by providing utilities
// like createSlice and configureStore.
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. Create Store
// 2. Create Provider
// 3. Configure Store -> Create Reducer

// provider is at the outermost component => index.js

// const obj = {
//   name: "sonata",
//   run: (num) => {
//     console.log(num);
//   },
// };

// obj.run(1);

// create a slice of store(states) using createSlice from Redux Toolkit
const counterStore = createSlice({
  name: "countNum",
  // defines the initial state with a property num initialized to 100
  initialState: { num: 100 },
  // defines a reducer function called up to update the state.
  reducers: {
    up: (state, action) => {
      state.num += action.payload;
    },
  },
}); // receives an object {} whose key-value pairs can be anything

const counterStore2 = createSlice({
  name: "countNum2",
  // defines the initial state with a property num initialized to 100
  initialState: { num2: 300, title: "hi" },
  // defines a reducer function called up to update the state.
  reducers: {
    up: (state, action) => {
      state.num2 += action.payload;
    },
  },
});

// configure the Redux store using configureStore from Redux Toolkit
// configureStore takes an object with a reducer property where we
// provide the reducer for the counter slice.
// the "counter" is the counter reducer
// the "counterStore.reducer" is the counter SLICE (slice of store/states that has counter)
const store = configureStore({
  reducer: { counter: counterStore.reducer }, // {} object of STATES
}); // counter is state, counterStore is the 'slice' of store used in redux toolkit

const store2 = configureStore({
  reducer: { counter: counterStore2.reducer }, // {} object of STATES
});

// const store = configureStore({
//   reducer: {
//     counter: counterStore.reducer,
//     counter2: counterStore2.reducer,
//   },
// });

const App = () => {
  return (
    // wraps content with Provider conmponent from react redux to make the
    // redux store available to all its child components.
    // so when app component is rendered, it includes the provider with the redux store.
    // this makes the redux store accessible to all components in the component tree.
    <Provider store={(store, store2)}>
      <div>
        <h1>test</h1>
        <ChildOne />
      </div>
    </Provider>
  );
};

const ChildOne = () => {
  // the child componenet uses the useSelector hook from react redux to extract the
  // 'num' property from the redux store state and render it inside a div.
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.counter.num;
  });
  const num2 = useSelector((state) => {
    return state.counter.num;
  });
  const title2 = useSelector((state) => {
    return state.counter.title;
  });
  const handleClick = () => {
    dispatch(counterStore.actions.up(1));
  };
  const handleClick2 = () => {
    dispatch(counterStore2.actions.up(1));
  };
  return (
    <div>
      <h3>
        ChildOne num: {num} num2: {num2} title2: {title2}
      </h3>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
    </div>
  );
};

export default App;
