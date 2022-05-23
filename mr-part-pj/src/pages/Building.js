import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18n from "i18next";

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
    const { t }  = useTranslation(['bd', 'bdList'])

    const params = useParams()
    const buildingId = params.buildingId
    const [expOn, setExpOn] = useState(false);
    const [bdInfo, setBdInfo] = useState();

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
            window.scrollBy({top: document.querySelector(".bdExp__").offsetTop - document.documentElement.scrollTop, behavior: "smooth"})

        }
    }, [expOn, res])

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
                    <Link to="/building-list" className="buildingPage__name-num">
                        {bdInfo == undefined ? "..." : bdInfo.bd_id[0] === "M" ? t('bd:MJ-campus'): bdInfo.bd_id}
                    </Link>
                    {/* <div className="buildingPage__name-bdname">
                        
                    </div> */}
                    <div className="buildingPage__name-acc">
                        {/* 지금 이 건물,<br/> <b>{bdInfo == undefined ? "... " : bdInfo.bd_name}</b>의 <br/>이동약자 접근성 */}
                        {t('bd:buildingPage-name-1')}{i18n.language || window.localStorage.i18nextLng === "en"? <br/> : null}
                        {t('bd:buildingPage-name-2')}<br/>
                        <b>{bdInfo == undefined ? "... " : t("bdList:" + bdInfo.bd_id)}</b> 
                        {t('bd:buildingPage-acc-1')}<br />{t('bd:buildingPage-acc-2')}
                    </div>
                </div>
                <BdRating bdInfo={bdInfo} />
                <div className="buildingPage__reason">
                    {bdInfo == undefined ? null : bdInfo.is_info ? 
                        <button className="buildingPage__reason-toggle" onClick={scrollExp}> 
                            <b>{t('bd:buildingPage-reason-1')}</b> {t('bd:buildingPage-reason-2')} <IoChevronForward size={"2.2rem"}/> 
                        </button> : <><FormButton /> <InfoContent /><FormButton /></>}
                    
                    {expOn ? <BdExp bdInfo={bdInfo} vis={{}} /> : <BdExp bdInfo={bdInfo} vis={{display:"none"}} />}
                    
                </div>
            </div>
            <Footer />
        </div>
        )
}
export default Building;