import React, { useState, useEffect } from "react";
import Emoji from 'a11y-react-emoji'

import "../bd-exp.css";
import { IoMailSharp } from "react-icons/io5"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"

function BdExp() {

    return(
        <div className="bdExp__">
            <div className="bdExp__text">
                지금 이 건물에는
            </div>
            <div className="bdExp__true">
                <div className="bdExp__true-blocks">
                    <div className="bdExp__true-blocks-text">장애인 화장실</div>
                </div>
                <div className="bdExp__true-blocks">
                    <div className="bdExp__true-blocks-text">자동문</div>
                </div>
                <div className="bdExp__true-blocks">
                    <div className="bdExp__true-blocks-text">엘리베이터</div>
                </div>
            </div>
            <div className="bdExp__text">
                가 설치되어 있지만...
            </div>
            <div className="bdExp__false">
                <div className="bdExp__false-blocks">
                    <Emoji className="bdExp__false-blocks-emoji" symbol="🏢"/>
                    <div className="bdExp__false-blocks-text">건물 내 점자블록</div>
                </div>
                <div className="bdExp__false-blocks">
                    <Emoji className="bdExp__false-blocks-emoji" symbol="🔎"/>
                    <div className="bdExp__false-blocks-text">건물 주변 점자블록</div>
                </div>
                <div className="bdExp__false-blocks">
                    <Emoji className="bdExp__false-blocks-emoji" symbol="🧭"/>
                    <div className="bdExp__false-blocks-text">점자 안내</div>
                </div>
                <div className="bdExp__false-blocks">
                    <Emoji className="bdExp__false-blocks-emoji" symbol="↗️" emoji="up-right-arrow"/>
                    <div className="bdExp__false-blocks-text">경사로</div>
                </div>
            </div>
            <div className="bdExp__text">
                가 없어 이동약자들의 이용이 어렵습니다. 
            </div>
            
        </div>
    )
}
export default BdExp;
