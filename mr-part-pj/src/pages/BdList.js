import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {AiFillCaretRight, AiOutlineSearch} from "react-icons/ai"

import useGoogle from "../spreadsheet";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


import "../bd-list.css"

function BdList() {
    const res = useGoogle();
    var rawBdList = res;
    const [bdList, setBdList] = useState();

    useEffect(() => {
        if (res != undefined){
            setBdList(res)
        }
    }, [res])

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

    function buildingListOf(dir) {
        if (dir !== "M") {
            return bdList.filter(el => el.bd_id[0] === dir).map((el, ind) => {
                var link = "/" + el.bd_id.toLowerCase();
                return (
                    <li key={ind}>
                        <Link className="bdList__list-el" to={link}>
                            <div className="bdList__list-el-num">{el.bd_id}</div>
                            <div className="bdList__list-el-name">{el.bd_name}</div>
                        </Link>
                    </li>)
            })
        } else {
            return bdList.filter(el => el.bd_id[0] === dir).map((el, ind) => {
                var link = "/" + el.bd_id.toLowerCase();
                return (
                    <li key={ind}>
                        <Link className="bdList__list-el" to={link}>
                            <div className="bdList__list-el-name">{el.bd_name}</div>
                        </Link>
                    </li>)
            })
        }
        
    }

    function searchSpace(e) {
        setBdList(rawBdList.filter(el => el.bd_name.includes(e.target.value)))
        var els = document.getElementsByClassName('bdList__list')
        var buttons = document.getElementsByClassName('bdList__direction-arrow')
        
        if (e.target.value.length !== 0) {
            for (let i = 0; i < els.length; i++) {
                if (els[i].classList.contains("list-hide")) {
                    if ( i < 3 ) {
                        buttons[i].classList.add("arrow-rotated")
                        els[i].classList.remove("list-hide")
                    } else {
                        document.getElementsByClassName('bdList__campus-arrow')[0].classList.add("arrow-rotated")
                        els[i].classList.remove("list-hide")
                    }
                };
            }
            // 
            
        } else {
            for (let i = 0; i < els.length; i++) {
                if (!els[i].classList.contains("list-hide")) {
                    if ( i < 3 ) { 
                        buttons[i].classList.remove("arrow-rotated")
                        els[i].classList.add("list-hide")
                    } else {
                        document.getElementsByClassName('bdList__campus-arrow')[0].classList.remove("arrow-rotated")
                        els[i].classList.add("list-hide")
                    }
                };
            }
        }
        
    }


    return(
        <div className="ui-container">
            <NavBar />
            <div className="bdList__">
                <h1 className="bdList__title">건물 목록</h1>
                <div className="bdList__search">
                    <input type="search" name="q" placeholder="건물 이름을 입력하세요" onChange={(e) => searchSpace(e)} className="bdList__search-input"></input>
                    <AiOutlineSearch className="bdList__search-icon" />
                </div>
                
                <h2 className="bdList__campus">본교</h2>
                <h3 className="bdList__direction">동측
                    <button className="bdList__direction-arrow direction-east" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("E")}
                </ul>
                <h3 className="bdList__direction">서측
                    <button className="bdList__direction-arrow direction-west" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("W")}
                </ul>
                <h3 className="bdList__direction">북측
                <button className="bdList__direction-arrow direction-north" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("N")}
                </ul>
                <h2 className="bdList__campus">문지캠퍼스 
                    <button className="bdList__campus-arrow campus-munji" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h2>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("M")}
                </ul>
            </div>
            <Footer />
        </div>
        )
}
export default BdList;