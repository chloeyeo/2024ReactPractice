import { useSelector, useDispatch } from "react-redux";
const Counter = ({ data }) => {
  // Counter is a component that USES the state and displayes parts of the state!
  //  we put useSelector in components that USE/subscribe to the state!
  //   const num = useSelector((state) => {
  //     return state.num;
  //   });
  //   const title = useSelector((state) => {
  //     return state.title;
  //   });
  const { num, title, content } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({ type: "up", payload: 1 }); // action object passed into useDispatch as parameter.
  }
  return (
    <>
      <div>Counter( {num} )</div>
      <div>Title( {title} )</div>
      <div>Content( {content} )</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Counter;
