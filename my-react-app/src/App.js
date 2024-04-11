import React from "react";
import "./assets/css/tailwindStyle.css";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// ctrl+shift+w + div.box

function reducer(state, action) {
  // state is the initialState we passed into store along with reducer
  // console.log(state); // object -> num:0
  console.log(action);
  if (action.type === "num/increment") {
    return { ...state, num: state.num + action.payload };
  }

  return state;
}

const initialState = {
  num: 0,
  title: "hi",
  content: "Lorem ipsum dolor sit amet.",
};

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
  const content = useSelector((state) => {
    return state.content;
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
  // state is initialState passed into store
  // const num = useSelector((state) => {
  //   return state.num;
  // });
  // const title = useSelector((state) => {
  //   return state.title;
  // });

  // destructuring
  // const { num, title } = useSelector((state) => {
  //   return state;
  // });
  const { num, title } = useSelector((state) => state); // same as above (for one liner don't need {return;})
  const dispatch = useDispatch();
  // console.log(num);
  return (
    <>
      <div className="box border p-4">
        <h3>childtwo</h3>
        <h5>number ( {num} )</h5>
        <h5>title ( {title} )</h5>
        <button
          className="border bg-slate-600 text-white px-3 py-1 rounded-md hover:bg-slate-300 hover:text-black"
          onClick={() => {
            dispatch({ type: "num/increment", payload: 1 });
          }}
        >
          click
        </button>
      </div>
    </>
  );
}

export default App;
