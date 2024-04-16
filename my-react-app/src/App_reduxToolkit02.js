import React, { useState, useEffect } from "react";
import "./assets/css/tailwindStyle.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
// createSlice가 여러개 있으면 configureStore 에 넣었는데 그 대신 createSlice 들을 combineReducer에 넣는다.

// slice of store called counterStore
const counterStore = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    // actions. up is one action
    up: (state, action) => {
      state.num += action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    // states. counter is one state
    counter: counterStore.reducer,
  },
});

function App() {
  <Provider store={store}>
    <div>title:toolkit</div>
    <ChildOne />
  </Provider>;
}

function ChildOne() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);
  return (
    <div>
      <h1>ChildOne num:{num}</h1>
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1)); // 1 is action.payload
        }}
      >
        increment
      </button>
    </div>
  );
}

export default App;
