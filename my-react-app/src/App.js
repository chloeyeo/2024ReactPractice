import React from "react";
import "./assets/css/tailwindStyle.css";

const App = () => {
  // gap-10 is gap 10px
  return (
    <>
      <div className="container mx-auto bg-gray-400 p-4 rounded-md text-white grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* div*4>{test$} then tab */}
        <div className="bg-sb-300 rounded-md p-4">test1</div>
        <div className="bg-sb-300 rounded-md p-4">test2</div>
        <div className="bg-sb-300 rounded-md p-4">test3</div>
        <div className="bg-sb-300 rounded-md p-4 md:hidden">test4</div>
      </div>
    </>
  );
};

export default App;
