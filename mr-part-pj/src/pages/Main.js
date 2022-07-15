import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import InfoContent from "../components/InfoContent";
import Footer from "../components/Footer";
import "../main.css";

function Main() {

    return(
        <div className="ui-container">
            <div className="mainPage__">
                <NavBar />
                <InfoContent isMain={true} />
            </div>
            <Footer />
        </div>
        )
}
export default Main;

