import React, { useState, useEffect } from "react";
import Emoji from 'a11y-react-emoji'
import {Link} from "react-router-dom";
import {AiFillCaretRight, AiOutlineSearch} from "react-icons/ai"
import { useTranslation } from "react-i18next";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import i18n from "i18next";

import useGoogle from "../spreadsheet";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import map from "../img/map.png";


import "../bd-list.css"

function BdList() {
    const res = useGoogle();
    var rawBdList = res;
    const [bdList, setBdList] = useState();
    const { t }  = useTranslation(['bdList', 'bd'])

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
                            <div className="bdList__list-el-name">{t("bdList:" + el.bd_id)}</div>
                            <div className="bdList__list-el-checked">{el.is_info ? <Emoji symbol='✅' ></Emoji> : null}</div>
                        </Link>
                    </li>)
            })
        } else {
            return bdList.filter(el => el.bd_id[0] === dir).map((el, ind) => {
                var link = "/" + el.bd_id.toLowerCase();
                return (
                    <li key={ind}>
                        <Link className="bdList__list-el" to={link}>
                            <div className="bdList__list-el-name">{t("bdList:" + el.bd_id)}</div>
                            <div className="bdList__list-el-checked">{el.is_info ? <Emoji symbol='✅' ></Emoji> : null}</div>
                        </Link>
                    </li>)
            })
        }
        
    }

    function searchSpace(e) {
        setBdList(rawBdList.filter(el => {
            if ((i18n.language === "en" || window.localStorage.i18nextLng === "en" ) && el.bd_eng_name) return el.bd_eng_name.toLowerCase().includes(e.target.value.toLowerCase())
            else return el.bd_name.includes(e.target.value)
        }))
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
                <h1 className="bdList__title">{t('bd:list')}</h1>
                <TransformWrapper 
                    initialScale={0.3} 
                    minScale={0.2}
                    maxScale={3}
                    wheel={{step:0.02}}
                    centerOnInit={true}
                    >
                    <TransformComponent>
                        <img src={map}></img>
                    </TransformComponent>
                </TransformWrapper>
                <div className="bdList__search">
                    <input type="search" name="q" placeholder={t('bd:placeholder')} onChange={(e) => searchSpace(e)} className="bdList__search-input"></input>
                    <AiOutlineSearch className="bdList__search-icon" />
                </div>
                
                <h2 className="bdList__campus">{t('bd:main')}</h2>
                <h3 className="bdList__direction">{t('bd:east')}
                    <button className="bdList__direction-arrow direction-east" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("E")}
                </ul>
                <h3 className="bdList__direction">{t('bd:west')}
                    <button className="bdList__direction-arrow direction-west" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("W")}
                </ul>
                <h3 className="bdList__direction">{t('bd:north')}
                <button className="bdList__direction-arrow direction-north" onClick={(e) => handleClickArrow(e.target)}><AiFillCaretRight/></button> 
                </h3>
                <ul className="bdList__list list-hide">
                    {bdList === undefined ? null : buildingListOf("N")}
                </ul>
                <h2 className="bdList__campus">{t('bd:MJ-campus')}
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