import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../building.css";
import { useParams } from "react-router-dom";

function Building() {
    const params = useParams()
    const buildingId = params.buildingId
    
    return(
        <div className="ui-container">
            <NavBar />
            <div className="buildingPage__">
                <div className="buildingPage__name">
                    <span className="buildingPage__name-num">
                        {buildingId}
                    </span>
                    <div className="buildingPage__name-acc">
                        지금 이 건물의 <br/><b>이동약자 접근성</b>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
        )
}
export default Building;