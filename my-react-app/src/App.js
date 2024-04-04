import React, { useState } from "react";
import axios from "axios";
import "./assets/css/style.scss";
// 1. npm i axios
// 2. import axios from "axios"

const App = () => {
  const [posts, setPosts] = useState([]);
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
  return (
    <>
      <div>On Click Axios</div>
      <button onClick={insertData}>Input Data</button>
      <ul>
        {posts.length > 0
          ? posts.map((post, index) => {
              return <li key={index}>{post.title}</li>;
            })
          : null}
      </ul>
    </>
  );
};

export default App;
