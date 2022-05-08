import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "../nav-bar.css";
import logo from "../img/logo.svg";

function NavBar() {

    return(
        <div className="navBar__">
            <div className="navBar__logo"><img src={logo}></img></div>
            <Link to="/" className="navBar__info">Info</Link>
        </div>
    )
}
export default NavBar;