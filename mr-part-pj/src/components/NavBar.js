import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useTranslation  } from "react-i18next";
import i18n from "i18next";

import "../nav-bar.css";
import logo from "../img/logo.svg";

function NavBar() {
    const { t }  = useTranslation(['bd'])
    const getLanguage = () => i18n.language || window.localStorage.i18nextLng

    const onChangeLang = () => {
        if (getLanguage() === "en") {
            if (window.confirm("한국어로 보시겠습니까?")){
                window.localStorage.removeItem("i18nextLng")
                window.localStorage.removeItem("i18n")
                window.localStorage.removeItem("i18nextlng")
                window.localStorage.setItem("i18nextLng", 'ko')
                i18n.changeLanguage('ko')
            }
        }
        else {
            if (window.confirm("Do you want to see the page in English?")) {
                window.localStorage.removeItem("i18nextLng")
                window.localStorage.removeItem("i18n")
                window.localStorage.removeItem("i18nextlng")
                window.localStorage.setItem("i18nextLng", 'en')
                i18n.changeLanguage('en')
            }
        }   
    }

    return(
        <div className="navBar__">
            <div className="navBar__logo"><Link to="/"><img src={logo}></img></Link></div>
            <div>
                <button className="navBar__lng" onClick={onChangeLang}>{t('bd:lan')}</button>
                
            </div>
        </div>
    )
}
export default NavBar;