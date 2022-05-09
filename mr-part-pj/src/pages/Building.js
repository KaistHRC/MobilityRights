import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BdExp from "../components/BdExp";
import BdRating from "../components/BdRating";
import "../building.css";
import { useParams } from "react-router-dom";

import { IoChevronForward } from "react-icons/io5"

function Building() {
    const params = useParams()
    const buildingId = params.buildingId
    const [expOn, setExpOn] = useState(false);

    useEffect(() => {
        if (expOn) {
            window.scrollTo({top: 574, behavior: "smooth"})
        }
    }, [expOn])

    function scrollExp() {
        setExpOn(!expOn)
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
                <BdRating bdId={buildingId} />
                <div className="buildingPage__reason">
                    <button className="buildingPage__reason-toggle" onClick={scrollExp}> 
                        <b>왜?</b> 이유보기 <IoChevronForward size={"2.2rem"}/> 
                    </button>
                    {expOn ? <BdExp bdId={buildingId} /> : null}
                </div>
            </div>
            <Footer />
        </div>
        )
}
export default Building;