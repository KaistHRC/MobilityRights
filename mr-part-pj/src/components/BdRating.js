import React, { useState, useEffect } from "react";

import "../bd-rating.css";
import rate1 from "../img/1.png";
import rate2 from "../img/2.png";
import rate3 from "../img/3.png";
import rate4 from "../img/4.png";
import rate5 from "../img/5.png";
import infoPic from "../img/info.png";

function BdRating(props) {
    // 여러 backend things using props.bdId
    const appRateText = ["최악", "나쁨", "보통", "좋음", "최고"] 
    /// ['VERY POOR', 'POOR', "MODERATE", "GOOD", "GREAT"]
    const info = props.bdInfo
    const keys = ["road", "road_braille", "auto_door", "slope", "elevator", "braille_blocks", "info_braille", "toilet"]
    const [rate, setRate] = useState(2);
    const rateImg = {0: rate1, 1: rate2, 2:rate3, 3:rate4, 4:rate5};

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
                {info != undefined ? info.is_info ? <b> {appRateText[rate]} </b> : "아직 정보가 없습니다." /*"No information"*/: null} 
            </div>
        </div>
    )
}

export default BdRating;
