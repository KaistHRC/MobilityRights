import React, { useState, useEffect } from "react";

import "../nav-bar.css";
import logo from "../img/logo.svg";

function NavBar() {

    return(
        <div className="navBar__">
            <div className="navBar__logo"><img src={logo}></img></div>
            <a className="navBar__info" href="#">Info</a>
        </div>
        )
}
export default NavBar;