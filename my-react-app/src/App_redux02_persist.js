import React from "react";
import "./assets/css/tailwindStyle.css";
import { createStore } from "redux"; // 1. create store
import { Provider, useSelector, useDispatch } from "react-redux";

// redux-persist used to store data in localstorage so that it doesn't disappear on page reload
// stores data in f12->application tab->local storage tab.
// you can delete persist:root
// configure persist with lib
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // identify which storage to use

// ctrl+shift+w + div.box

function reducer(state = initialState, action) {
  switch (action.type) {
    case "num/increment":
      return {
        ...state,
        num: state.num + action.payload,
      };
    case "title/modify":
      return {
        ...state,
        title: state.title + " " + action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  num: 0,
  title: "hi",
  content: "Lorem ipsum dolor sit amet.",
};

const persistConfig = {
  // configure the reducer settings
  key: "root",
  // storage: 1. cookie 2. session 3. localstorage
  // localstorage is most commonly used as storage
  // if you use session you need to put session value in database
  storage,
};

const myPersistReducer = persistReducer(persistConfig, reducer); // initial state not put here so must specify initial state in param of reducer function

// const store = createStore(reducer, initialState);
const store = createStore(myPersistReducer);

// // persistor is the one that actually stores
// without persistStore the data won't be stored in localstorage at all.
const persistor = persistStore(store);

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
  // use useSelector to USE/acceess/subscribe to the global state in child component (USE only! NOT changing state)
  const content = useSelector((state) => {
    return state.content; // can extract out specific parts of state to use/subscribe to
  });
  return (
    <>
      <div className="box border p-4">
        <h3>childone</h3>
        <h5>content ( {content} )</h5>
        <ChildTwo />
      </div>
    </>
  );
}

function ChildTwo() {
  const { num, title } = useSelector((state) => state);
  const dispatch = useDispatch(); // to CHANGE state in child component, use useDispatch()!!
  return (
    <>
      <div className="box border p-4">
        <h3>childtwo</h3>
        <h5>number ( {num} )</h5>
        <h5>title ( {title} )</h5>
        <button
          className="border bg-slate-600 text-white px-3 py-1 rounded-md hover:bg-slate-300 hover:text-black"
          onClick={() => {
            // on button click change state by calling useDispatch()
            dispatch({ type: "num/increment", payload: 1 }); // dispatch() always receives an ACTION OBJECT {} as its parameter!
            // the {type:...payload:..} here is an action object, its key values can be anything; keys can be named anything and can have any number of key-value pairs.
            // once dispatch is called, the action object is dispatched and the action gets passed into the reducer -> and the reducer changes state!
          }}
        >
          click
        </button>
        <button
          className="border bg-slate-600 text-white px-3 py-1 rounded-md hover:bg-slate-300 hover:text-black"
          onClick={() => {
            dispatch({ type: "title/modify", payload: "changed" });
          }}
        >
          changeText
        </button>
      </div>
    </>
  );
}

export default App;
