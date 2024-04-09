import React from "react";
import "./assets/css/tailwindStyle.css";

const App = () => {
  // gap-10 is gap 10px
  return (
    <>
      {/* <div className="container mx-auto bg-gray-400 p-4 rounded-md text-white grid grid-cols-1 md:grid-cols-3 gap-4"> */}
      {/* div*4>{test$} then tab */}
      {/* <div className="bg-sb-300 rounded-md p-4">test1</div>
        <div className="bg-sb-300 rounded-md p-4">test2</div>
        <div className="bg-sb-300 rounded-md p-4">test3</div>
        <div className="bg-sb-300 rounded-md p-4 md:hidden">test4</div>
      </div> */}
      {/* flex-col is flex-direction:column; */}
      <section className="flex max-w-[400px] mx-auto mt-20">
        <div className="bg-white shadow-md rounded-md border p-6 w-full">
          <h1 className="text-center text-2xl font-semibold mb-4">로그인</h1>
          <hr className="mb-4" />
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500 flex mb-2"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="w-full bg-white border rounded-md p-2 text-xs mb-2"
              placeholder="이메일을 입력하세요"
            />
            <label
              htmlFor="pwd"
              className="text-sm font-semibold text-gray-500 flex mb-2"
            >
              패스워드
            </label>
            <input
              type="text"
              id="pwd"
              className="w-full bg-white border rounded-md p-2 text-xs"
              placeholder="패스워드를 입력하세요"
            />
          </div>
          <div className="mb-6"></div>
          <div>
            <button className="w-full text-xs text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
              회원가입
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
