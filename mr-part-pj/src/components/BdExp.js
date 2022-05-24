import React, { useState, useEffect } from "react";
import Emoji from 'a11y-react-emoji'
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5"

import { useTranslation } from "react-i18next";
import i18n from "i18next";


import "../bd-exp.css";

function BdExp(props) {
    const { t }  = useTranslation(['buildingExp', 'facGlsry'])
    const info = props.bdInfo
    const vis = props.vis
    const keys = ["road", "road_braille", "auto_door", "slope", "elevator", "braille_blocks", "info_braille", "toilet"]

    const lisTexts = keys.map(el => t('buildingExp:' + el))

    /// ["건물 주변 보도 경사", "건물 주변 점자블록", "자동문", "경사로", "엘리베이터", "건물 내 점자블록", "점자 안내", "장애인 화장실"]
    /// ["Pavement ramps around the building", "Tactile pavements around the building", "Automatic doors", "Wheelchair ramps", "Elevators", "Tactile pavements in the building", "Braille Maps", "Wheelchair accessible bathrooms"]
    const lisSymbols = ["🛣", "🔎", "🚪", "↗️", "🛗", "🏢", "🧭", "🚽"]
  
    const [arrTrue, setArrTrue] = useState([]);
    const [arrFalse, setArrFalse] = useState([]);
    const styleText = {
        fontSize: i18n.language === 'en' || window.localStorage.i18nextLng === 'en' ? "2.2rem" : "2.7rem",
        padding: "10px",
        maxWidth: "230px",
    }
    useEffect(() => {
        if (info != undefined && info.is_info) {
            var arr0 = [];
            var arr1 = [];

            for (let i = 0; i < keys.length; i++) {
                if (info[keys[i]]) {
                    arr0.push({
                        "text": lisTexts[i], 
                        "symbol": lisSymbols[i]
                    })
                } else {
                    arr1.push({
                        "text": lisTexts[i], 
                        "symbol": lisSymbols[i]
                    })
                }
            }
            setArrTrue(arr0)
            setArrFalse(arr1)
        }
    }, [info, t('buildingExp:road')])

    return( 
        /// This building has...
        /// But doesn't have...
        /// "which makes it difficult for some people to access the building."
        // OR
        /// "which are needed for accessibility."
        <div className="bdExp__" style={vis}>
            <div className="bdExp__text">
                {t('bd:buildingPage-exp-text-1')} 
            </div>
            <div className="bdExp__true">
                {arrTrue.map((el, ind) => 
                    <div className="bdExp__true-blocks" key={ind}>
                        <Link to="/facility-terminology" className="bdExp__true-blocks-text" style={styleText}>{el.text}</Link>
                    </div>)}
            </div>
            <div className="bdExp__text">
                {arrTrue.length === 8 ? t('bd:buildingPage-exp-text-5') : t('bd:buildingPage-exp-text-2')}
            </div>
            <div className="bdExp__false">
                {arrFalse.map((el, ind) => 
                    <div className="bdExp__false-blocks" key={ind}>
                        <Emoji className="bdExp__false-blocks-emoji" symbol={el.symbol}/>
                        <Link to="/facility-terminology" className="bdExp__false-blocks-text" style={styleText}>{el.text}</Link>
                    </div>)}
            </div>
            <div className="bdExp__text">
                {arrTrue.length < 5 ? t('bd:buildingPage-exp-text-3') : arrTrue.length == 8? null: t('bd:buildingPage-exp-text-4')}
            </div>
            <Link className="bdExp__term" to="/facility-terminology"><span>{t('facGlsry:button')}</span><IoChevronForward size={"2.4rem"}/> </Link>
        </div>
    )
}
export default BdExp;
