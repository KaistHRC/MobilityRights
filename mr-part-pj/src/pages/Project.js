import React, { useState, useEffect } from "react";
import { useTranslation  } from "react-i18next";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormButton from "../components/formButton";

import "../project.css"

import booth1 from "../img/포스터.jpg";
import booth2 from "../img/성명문.jpg";

function Project() {
    const { t }  = useTranslation(['pj'])

    return(
        <div className="ui-container">
            <NavBar />
            <div className="project__">
                <h1 className="facilityExp__title">{t('pj:title')}</h1>
                <h2 className="facilityExp__name">{t('pj:h-1')}</h2>
                <article className="project-exp">
                    <b>{(t("pj:text-1-1"))}</b>{(t("pj:text-1-2"))}
                </article>
                <div className="project__container">
                    <div className="project__container-inner">
                        <img src={booth1} className="project__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>{t('pj:cap-1')}</span>
                    </div>
                    <div className="project__container-inner">
                        <img src={booth2} className="project__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>{t('pj:cap-2')}</span>
                    </div>
                </div>
                <h2 className="facilityExp__name">{t('pj:h-2')}</h2>
                <article className="project-exp">
                    <p>{t('pj:text-2')}</p>
                    <p>{t('pj:text-3-1')}<b>{t('pj:text-3-2')}</b>{t('pj:text-3-3')}</p>
                </article>
               
                <h2 className="facilityExp__name">{t('pj:h-3')}</h2>
                <article className="project-exp" style={{paddingBottom: "16px"}}>
                    <p>{t('pj:text-4-1')} <b>{t('pj:text-4-2')}</b> {t('pj:text-4-3')}<b>{t('pj:text-4-4')}</b>{t('pj:text-4-5')}</p>
                    <p>{t('pj:text-5')}</p>
                </article>
                <FormButton style={{marginBottom: "50px"}}/>

                <article className="project-exp" style={{fontSize: "1.8rem", lineHeight: "2.8rem", color: "white"}}>
                    {t('pj:text-7')}
                </article>
                
            </div>
            <Footer />
        </div>
    )
}
export default Project;