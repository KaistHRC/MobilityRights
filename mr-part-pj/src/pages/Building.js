import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BdExp from "../components/BdExp";
import "../building.css";
import { useParams } from "react-router-dom";

import { IoChevronForward } from "react-icons/io5"

function Building() {
    const params = useParams()
    const buildingId = params.buildingId
    
    function scrollExp() {
        console.log("adwd")
        window.scrollBy({top: "200px", behavior: 'smooth'});
    }

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
                <div className="buildingPage__reason">
                    <button className="buildingPage__reason-toggle" onClick={scrollExp}> 
                        <b>왜?</b> 이유보기 <IoChevronForward size={"2.2rem"}/> 
                    </button>
                    <BdExp />
                </div>
            </div>
            <Footer />
        </div>
        )
}
export default Building;