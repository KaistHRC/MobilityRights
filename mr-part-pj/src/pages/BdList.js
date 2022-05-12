import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai"


import NavBar from "../components/NavBar";


import "../bd-list.css"

function BdList() {
    function handleClickArrow(target) {
        var button = findButton(target);
        const buttonClassLis = button.classList

        if (buttonClassLis.contains("arrow-rotated")) buttonClassLis.remove("arrow-rotated")
        else buttonClassLis.add("arrow-rotated")

        openBuildingList(button)
    }

    function findButton(t) {
        const parEl = t.parentElement
        if (parEl.parentElement.classList.contains("bdList__campus-arrow")
            || parEl.parentElement.classList.contains("bdList__direction-arrow")) {
            return parEl.parentElement
        } else if (t.classList.contains("bdList__campus-arrow") ||
            t.classList.contains("bdList__direction-arrow")){
            return t
        } else {
            return parEl
        }
    }

    function openBuildingList(target) {
        var list = target.parentElement.nextElementSibling
        if (!list.classList.contains("list-hide")) list.classList.add("list-hide")
        else list.classList.remove("list-hide");
    }



    return(
        <div className="ui-container">
            <NavBar />
            <div className="bdList__">
                <h1 className="bdList__title">건물 목록</h1>
                <h2 className="bdList__campus">본교</h2>
                <h3 className="bdList__direction">동측
                    <button className="bdList__direction-arrow direction-east" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list bdList__east list-hide">
                    <li>
                        <Link className="bdList__list-el" to = "/e1">
                            <div className="bdList__list-el-num">E1</div>
                            <div className="bdList__list-el-name">정문</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="bdList__list-el" to = "/e2-1">
                            <div className="bdList__list-el-num">E2-1</div>
                            <div className="bdList__list-el-name">지식서비스공학과/수리과학과</div>
                        </Link>
                    </li>
                </ul>
                <h3 className="bdList__direction">서측
                    <button className="bdList__direction-arrow direction-west" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <h3 className="bdList__direction">북측
                <button className="bdList__direction-arrow direction-north" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <h2 className="bdList__campus">문지캠퍼스 
                    <button className="bdList__campus-arrow campus-munji" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h2>
            </div>
        </div>
        )
}
export default BdList;