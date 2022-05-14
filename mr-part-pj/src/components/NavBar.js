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
        if (getLanguage() === "ko") {
            window.localStorage.removeItem("i18nextLng")
            window.localStorage.setItem("i18nextLng", 'en')
            i18n.changeLanguage('en')
            console.log('en')
        }
        else {
            window.localStorage.clear()
            window.localStorage.removeItem("i18nextLng")
            window.localStorage.setItem("i18nextLng", 'ko')
            i18n.changeLanguage('ko')
            console.log('ko')
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