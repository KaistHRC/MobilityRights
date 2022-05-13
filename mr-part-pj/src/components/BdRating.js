import React, { useState, useEffect } from "react";

import "../bd-rating.css";
import rate1 from "../img/1.png";
import rate2 from "../img/2.png";
import rate3 from "../img/3.png";
import rate4 from "../img/4.png";
import rate5 from "../img/5.png";
import infoPic from "../img/info.png";
import { useTranslation } from "react-i18next";

function BdRating(props) {
    const { t }  = useTranslation(['page'])
    // 여러 backend things using props.bdId
    const appRateText = [
        t('page:buildingPage-rating-1'), 
        t('page:buildingPage-rating-2'), 
        t('page:buildingPage-rating-3'), 
        t('page:buildingPage-rating-4'), 
        t('page:buildingPage-rating-5'), ]

    /// ['VERY POOR', 'POOR', "MODERATE", "GOOD", "GREAT"]
    const info = props.bdInfo
    const keys = ["road", "road_braille", "auto_door", "slope", "elevator", "braille_blocks", "info_braille", "toilet"]
    const [rate, setRate] = useState(2);
    const rateImg = {0: rate1, 1: rate2, 2: rate3, 3: rate4, 4: rate5};

    useEffect(() => {
        if (info != undefined && info.is_info) {
            var cnt = 0;
            for (let i = 0; i < keys.length; i++) {
                if (info[keys[i]]) cnt ++
            }
            console.log(cnt)
            setRate(Math.max(Math.ceil(cnt*5/8)-1, 0))
        }
    }, [info])
    

    return (
        /// "NO INFORMATION"
        <div className="bdRating__">
            {info != undefined ? info.is_info ? <img src={rateImg[rate]} /> : <img src={infoPic} />  : null}
            <div className="bdRating__text">
                {info != undefined ? info.is_info ? <b> {appRateText[rate]} </b> : t('page:buildingPage-noInfo') /*"No information"*/: null} 
            </div>
        </div>
    )
}

export default BdRating;
