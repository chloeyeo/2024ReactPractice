//counterStore comes into this file.

import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: { num: 100 },
  reducers: {
    // actions. up is action type
    up: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      state.num += action.payload;
    },
  },
});

export default counterStore;
