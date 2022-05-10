import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BdExp from "../components/BdExp";
import BdRating from "../components/BdRating";
import InfoContent from "../components/InfoContent";

import useGoogle from "../spreadsheet";


import "../building.css";
import { useParams } from "react-router-dom";

import { IoChevronForward } from "react-icons/io5"
import FormButton from "../components/formButton";

function Building() {
    let navigate = useNavigate();
    const params = useParams()
    const buildingId = params.buildingId
    const [expOn, setExpOn] = useState(false);
    // var bdInfo = {};
    const [bdInfo, setBdInfo] = useState();

    const buildingInfo = null;
    const res = useGoogle();

    useEffect(() => {
        if (res != undefined){
            const info = res.filter(el => el.bd_id == buildingId.toUpperCase())
            if (info.length == 0) {
                navigate("/")
            } else {
                setBdInfo(info[0])
            }
        }
        if (expOn) {
            window.scrollBy({top: document.querySelector(".bdExp__").offsetTop, behavior: "smooth"})
        }
    }, [expOn, res])

    useEffect(() => {
        console.log(bdInfo)
    }, [bdInfo])

    function scrollExp() {
        setExpOn(!expOn)
    }

    return(
        /// Accessibility for this building, ???
        /// Find out WHY
        <div className="ui-container">
            <NavBar />
            <div className="buildingPage__">
                <div className="buildingPage__name">
                    <span className="buildingPage__name-num">
                        {bdInfo == undefined ? "..." : bdInfo.bd_id}
                    </span>
                    {/* <div className="buildingPage__name-bdname">
                        
                    </div> */}
                    <div className="buildingPage__name-acc">
                        지금 이 건물,<br/> <b>{bdInfo == undefined ? "... " : bdInfo.bd_name}</b>의 <br/>이동약자 접근성
                    </div>
                </div>
                <BdRating bdInfo={bdInfo} />
                <div className="buildingPage__reason">
                    {bdInfo == undefined ? null : bdInfo.is_info ? 
                        <button className="buildingPage__reason-toggle" onClick={scrollExp}> 
                            <b>왜?</b> 이유보기 <IoChevronForward size={"2.2rem"}/> 
                        </button> : <><FormButton /> <InfoContent /><FormButton /></>}
                    {expOn ? <BdExp bdInfo={bdInfo} /> : null}
                </div>
            </div>
            <Footer />
        </div>
        )
}
export default Building;