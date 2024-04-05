import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/css/style03.scss"; // npm i sass

// pagination -> first MUST know total number of records received from axios!
// then must know how many I want to list in each page (listCount).
// then total pages count will be total num of records / items listed per page.

const App = () => {
  const [viewData, setViewData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [listCnt, setListCnt] = useState(5);
  useEffect(() => {
    // ? is a query string (?_page=&_limit=)
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${listCnt}`
      )
      .then((response) => {
        // console.log(response.headers["x-total-count"]);
        setViewData(response.data);
        let totalRecord = response.headers["x-total-count"];
        setTotalPage(Math.ceil(totalRecord / listCnt));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);
  return (
    <>
      <h3>Total Pages: {totalPage}</h3>
      <ul>
        {viewData.map((dataObj) => {
          return (
            <li>
              <span style={{ fontWeight: "bold" }}>{dataObj.title}</span>:{" "}
              {dataObj.body}
            </li>
          );
        })}
      </ul>
      <div className="pagination">
        <ul>
          <li
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            1
          </li>
          <li
            onClick={() => {
              setCurrentPage(2);
            }}
          >
            2
          </li>
          <li
            onClick={() => {
              setCurrentPage(3);
            }}
          >
            3
          </li>
          <li
            onClick={() => {
              setCurrentPage(4);
            }}
          >
            4
          </li>
          <li
            onClick={() => {
              setCurrentPage(5);
            }}
          >
            5
          </li>
          <li
            onClick={() => {
              setCurrentPage(6);
            }}
          >
            6
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
