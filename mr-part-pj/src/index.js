import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop.js'
import { Main, Building, BdList, FacilityExp } from './pages'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/building-list" element={<BdList />} />
        <Route path="/facility-terminology" element={<FacilityExp />}/>
        {/* <Route path="/:buildingId" element={<Main />}/> */}
        <Route path="/:buildingId" element={<Building />}/>
        <Route
          path="*"
          element={<Main />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
