import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "../nav-bar.css";
import logo from "../img/logo.svg";

function NavBar() {
    function translate() {
        console.log("translate plz")
        //local storage blahblah
    }
    return(
        <div className="navBar__">
            <div className="navBar__logo"><img src={logo}></img></div>
            <div className="navBar__info">
                <button onClick={translate}><span className="navBar__info">Eng</span></button>
                <Link to="/">Info</Link>
            </div>
        </div>
    )
}
export default NavBar;