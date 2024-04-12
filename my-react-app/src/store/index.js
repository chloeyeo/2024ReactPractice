import { createStore } from "redux";
// 1. You have to make store first
// 2. make a reducer
import counterReducer from "../redux/counterReducer";
const store = createStore(counterReducer);
export default store;
