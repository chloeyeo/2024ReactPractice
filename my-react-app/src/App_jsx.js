import "./assets/css/style.css";
import logo from "./logo.svg";

function App() {
  const myStyle = {
    display: "flex",
    background: "red",
  };
  function view(msg) {
    alert(msg);
  }
  function countNum() {
    return 100;
  }
  return (
    // ctrl+shift+w to wrap component inside some other component quick.
    <div>
      <div style={myStyle}>
        <h1 className="logo">hi</h1>
        {/* this is the modal component! */}
        <span>test</span>
      </div>
      {/* onClick={view}
      OR onClick={()=>{view()}} <- bc this itself is not Calling the function; this itself is also just a function without the call()
      just like view is the name of function on first line.  */}
      <button
        className="btn primary"
        onClick={() => {
          view("hi peeps");
        }}
      >
        click
      </button>
      {countNum()}
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
