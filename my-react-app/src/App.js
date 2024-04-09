import React from "react";
import "./assets/css/tailwindStyle.css";

const App = () => {
  // gap-10 is gap 10px
  return (
    <>
      <div className="container mx-auto bg-gray-400 p-4 rounded-md text-white flex gap-3">
        {/* div*4>{test$} then tab. flex-1 is flex-grow: 1 */}
        <div className="bg-sb-300 rounded-md p-4 flex-1">test1</div>
        <div className="bg-sb-300 rounded-md p-4 flex-1">test2</div>
        <div className="bg-sb-300 rounded-md p-4 flex-1">test3</div>
        <div className="bg-sb-300 rounded-md p-4 flex-1">test4</div>
      </div>
    </>
  );
};

export default App;
