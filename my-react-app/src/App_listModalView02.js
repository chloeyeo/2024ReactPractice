import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal4 from "./components/Modal4";
import "./assets/css/style.scss";

// you can have multiple useEffects just like you can have multiple useStates.

const App = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  async function insertData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20"
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function closeModal() {
    setOpenModal(false);
  }
  // if dependency list is empty, useEffect loads its own function only
  // once on load i.e. on load of App function. I.e. runs only once after
  // initial rerender if empty dependency list.
  useEffect(() => {
    insertData();
  }, []); // [num] calls axios everytime num changes
  return (
    <>
      {/* <button>Input Data</button> */}
      <ul className="posts">
        {posts.length > 0
          ? posts.map((post, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setOpenModal(true);
                    setClickedIndex(index);
                  }}
                >
                  {post.title}
                </li>
              );
            })
          : null}
      </ul>
      {openModal ? (
        <Modal4
          posts={posts}
          clickedIndex={clickedIndex}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
};

export default App;
