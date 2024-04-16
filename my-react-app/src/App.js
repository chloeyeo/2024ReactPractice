import React, { useState, useEffect } from "react";
import "./assets/css/tailwindStyle.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
// createSlice가 여러개 있으면 configureStore 에 넣었는데 그 대신 createSlice 들을 combineReducer에 넣는다.
import store from "./store/store.js";
import ChildOne from "./components/ChildOne.js";

function App() {
  return (
    <Provider store={store}>
      <div>title:toolkit</div>
      <ChildOne />
    </Provider>
  );
}

export default App;
