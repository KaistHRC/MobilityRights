import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import InfoContent from "../components/InfoContent";
import "../main.css";

function Main() {

    return(
        <div className="ui-container">
            <div className="mainPage__">
                <NavBar></NavBar>
                <InfoContent></InfoContent>
            </div>
        </div>
        )
}
export default Main;