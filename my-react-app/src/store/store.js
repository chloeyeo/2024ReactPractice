import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./counterSlice";

const store = configureStore({
  reducer: {
    // states
    counter: counterStore.reducer,
  },
});

export default store;
