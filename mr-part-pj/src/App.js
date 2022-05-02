import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Fragment } from "react";
import gapi from "gapi-client";
import Main from './pages/Main';

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
      <Main></Main>
    </>
  );
  
}

export default App;
