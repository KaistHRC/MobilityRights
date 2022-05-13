import React, { useState, useEffect } from "react";
import Emoji from 'a11y-react-emoji'
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5"

import "../bd-exp.css";

function BdExp(props) {
    // backend using props.bdId
    const info = props.bdInfo
    const keys = ["road", "road_braille", "auto_door", "slope", "elevator", "braille_blocks", "info_braille", "toilet"]
    const lisTexts = ["건물 주변 보도 경사", "건물 주변 점자블록", "자동문", "경사로", "엘리베이터", "건물 내 점자블록", "점자 안내", "장애인 화장실"]
    /// ["Pavement ramps around the building", "Tactile pavements around the building", "Automatic doors", "Wheelchair ramps", "Elevators", "Tactile pavements in the building", "Braille Maps", "Wheelchair accessible bathrooms"]
    const lisSymbols = ["🛣", "🔎", "🚪", "↗️", "🛗", "🏢", "🧭", "🚽"]
  
    const [arrTrue, setArrTrue] = useState([]);
    const [arrFalse, setArrFalse] = useState([]);

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
    }, [info])

    return( 
        /// This building has...
        /// But doesn't have...
        /// "which makes it difficult for some people to access the building."
        // OR
        /// "which are needed for accessibility."
        <div className="bdExp__">
            <div className="bdExp__text">
                이 건물에는 
            </div>
            <div className="bdExp__true">
                {arrTrue.map((el, ind) => 
                    <Link to="/facility-terminology" className="bdExp__true-blocks" key={ind}>
                        <div className="bdExp__true-blocks-text">{el.text}</div>
                    </Link>)}
            </div>
            <div className="bdExp__text">
                설치되어 있지만...
            </div>
            <div className="bdExp__false">
                {arrFalse.map((el, ind) => 
                    <Link to="/facility-terminology" className="bdExp__false-blocks" key={ind}>
                        <Emoji className="bdExp__false-blocks-emoji" symbol={el.symbol}/>
                        <div className="bdExp__false-blocks-text">{el.text}</div>
                    </Link>)}
            </div>
            <div className="bdExp__text">
                {arrTrue.length < 5 ? "없어서 이동약자들의 이용이 어렵습니다." : "모두의 캠퍼스를 위해서 꼭 필요합니다."}
            </div>
            <Link className="bdExp__term" to="/facility-terminology"><span>편의시설 용어 설명</span><IoChevronForward size={"2.4rem"}/> </Link>
        </div>
    )
}
export default BdExp;
