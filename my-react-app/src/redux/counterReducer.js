//  counterReducer is NOT a component => we're just using this as import so we don't put c in uppercase.

const initialState = {
  num: 100,
  title: "hi",
  content: "Lorem ipsum dolor sit amet.",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "up":
      return {
        ...state,
        num: state.num + action.payload,
      }; // returns updated state
    default:
      return state;
  }
};

export default counterReducer;
