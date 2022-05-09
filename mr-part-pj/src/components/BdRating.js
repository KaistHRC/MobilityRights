import React, { useState, useEffect } from "react";

import "../bd-rating.css";
import rate1 from "../img/1.png";
import rate2 from "../img/2.png";
import rate3 from "../img/3.png";
import rate4 from "../img/4.png";
import rate5 from "../img/5.png";

function BdRating(props) {
    // 여러 backend things using props.bdId
    const appRateText = ["최악", "나쁨", "보통", "좋음", "최고"]
    return (
        <div className="bdRating__">
            <img src={rate1} />
            <div className="bdRating__text">
                {appRateText[0]}
            </div>
        </div>
    )
}

export default BdRating;
