import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Emoji from 'a11y-react-emoji'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../facility-exp.css"
import blockInside from "../img/건물내점자블록.jpeg"
import slope from "../img/도로경사.JPG"
import blockOutside from "../img/도로점자블록.JPG"
import info from "../img/점자안내.JPG"
import ramp from "../img/경사로.jpg"

function FacilityExp() {
    const {t} = useTranslation(['buildingExp', 'facGlsry'])

    return(
        <div className="ui-container">
            <NavBar />
            <div className="facilityExp__">
                <h1 className="facilityExp__title">{t('facGlsry:title')}</h1>
                <h2 className="facilityExp__name"><Emoji symbol="🛣"/>{t('buildingExp:road')}</h2>
                <article className="facilityExp__name-exp">{t('facGlsry:text-1')}</article>
                <div className="facilityExp__container">
                    <img src={slope} className="facilityExp__container-img"></img>
                </div>
                <h2 className="facilityExp__name"><Emoji symbol="↗️"/>&nbsp;{t('buildingExp:slope')}</h2>
                <article className="facilityExp__name-exp">{t('facGlsry:text-2')}</article>
                <div className="facilityExp__container">
                    <img src={ramp} className="facilityExp__container-img"></img>
                </div>
                <h2 className="facilityExp__name"><Emoji symbol="🦯"/>&nbsp;{t('buildingExp:tactile')}</h2>
                <article className="facilityExp__name-exp">{t('facGlsry:text-3')}</article>
                <div className="facilityExp__container">
                    <div className="facilityExp__container-inner">
                        <img src={blockOutside} className="facilityExp__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>{t('buildingExp:road_braille')}</span>
                    </div>
                    <div className="facilityExp__container-inner">
                        <img src={blockInside} className="facilityExp__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>{t('buildingExp:braille_blocks')}</span>
                    </div>
                </div>
                <h2 className="facilityExp__name"><Emoji symbol="🧭"/>&nbsp;{t('buildingExp:info_braille')}</h2>
                <article className="facilityExp__name-exp">{t('facGlsry:text-4')}</article>
                <div className="facilityExp__container">
                    <img src={info} className="facilityExp__container-img"></img>
                </div>
            </div>
            <Footer />
        </div>
        )
}
export default FacilityExp;