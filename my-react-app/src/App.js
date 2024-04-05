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
  const [listCnt] = useState(5);
  const [paginationBulletCnt] = useState(3);
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
  }, [currentPage, listCnt]);
  // startPage = Math.floor((page-1)/pageCnt*pageCnt+1)
  // endPage = startPage+pageCnt-1
  const pageNumber = () => {
    let middleBullet = Math.ceil(paginationBulletCnt / 2);
    // let startPage = Math.min(
    //   totalPage - paginationBulletCnt + 1,
    //   Math.floor(
    //     ((currentPage - 1) / paginationBulletCnt) * paginationBulletCnt + 1
    //   )
    // );
    // let endPage = Math.min(startPage + paginationBulletCnt - 1, totalPage);
    let startPage = Math.max(1, currentPage - middleBullet + 1);
    let endPage = Math.min(totalPage, startPage + paginationBulletCnt - 1);
    let paginationBullets = [];
    for (let i = startPage; i <= endPage; i++) {
      paginationBullets.push(
        <li
          onClick={() => {
            setCurrentPage(i);
          }}
          className={i === currentPage ? "active" : null}
        >
          {i}
        </li>
      );
    }
    return paginationBullets;
  };
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
        {currentPage > 1 ? (
          <div
            className="prev"
            onClick={() => {
              setCurrentPage(Math.max(1, currentPage - 1));
            }}
          >
            &#8678;
          </div>
        ) : null}
        <ul className="paginationBullets">{pageNumber()}</ul>
        {currentPage !== totalPage ? (
          <div
            className="next"
            onClick={() => {
              setCurrentPage(Math.min(currentPage + 1, totalPage));
            }}
          >
            &#8680;
          </div>
        ) : null}
      </div>
    </>
  );
};

export default App;
