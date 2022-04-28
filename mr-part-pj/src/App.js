import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Fragment } from "react";
import gapi from "gapi-client";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   gapi.client.sheets.spreadsheets.values.get({
  //     spreadsheetId: "12hBnR4G-ACW9QnUVjveiYPbZcN0OnZdnf2-wlKuvAnw",
  //     range: "건물 번호"
  //   }).then((response) => {
  //     var result = response.result;
  //     var numRows = result.values ? result.values.length : 0;
  //     console.log(`${numRows} rows retrieved.`);
  //   });
  // }, []);

  return (
    <>
    <h1>data from google sheets</h1>
    <ul>
      {/* {data.map((item, i) => (
        <Fragment key={i}>
          <li>건물 번호 -- {item["건물 번호"]}</li>
          <li>건물 주변 도로 경사 - {item["건물 주변 도로 경사"]}</li>
          <br />
        </Fragment>
      ))} */}
    </ul>
  </>
  );
  
}

export default App;
