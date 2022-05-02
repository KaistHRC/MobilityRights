import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import "../main.css";

function Main() {

    return(
        <div className="ui-container">
            <div className="mainPage__">
                <NavBar></NavBar>
            </div>
        </div>
        )
}
export default Main;