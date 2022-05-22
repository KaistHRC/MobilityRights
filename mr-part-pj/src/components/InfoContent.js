import React from "react";
import Emoji from 'a11y-react-emoji'
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5"

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import "../info-content.css"

function InfoContent() {
    const {t} = useTranslation(['info'])
    const textStyle1 = i18n.language === 'en'? {fontSize:"2.4rem"} : {}
    const textStyle3 = i18n.language === 'en'? {fontSize:"1.8rem", marginLeft:"16px", lineHeight:"2.4rem"} : {marginLeft:"16px"}
    return (
        /// We Want KAIST to Be Accessible to EVERYONE
        /// Accessible buildings are also easier to use
        /// If you ever felt too tired climbing up the stairs
        /// If you ever had to go around the building with a bike to find a ramp
        /// If you ever had a hard time going to the classroom with crutches
        /// !Help us make KAIST more ACCESSIBLE
        <div className='infoContent__'>
            <div className='infoContent__1'>
                <div className='infoContent__1-emoji'>
                    <Emoji symbol='👩‍🦽' ></Emoji>
                    <Emoji symbol='🦮' ></Emoji>
                    <Emoji symbol='🦿' ></Emoji>
                    <Emoji symbol='🦻' ></Emoji>
                </div>
                <div className='infoContent__1-text' style={textStyle1}>
                    {t('info:text1-1')}<b>{t('info:text1-2')}</b>{t('info:text1-3')}  <br /> {t('info:text1-4')}  <b>{t('info:text1-5')} </b>
                </div>
                <div className='infoContent__1-emoji'>
                    <Emoji symbol='🧑‍🦼' ></Emoji>
                    <Emoji symbol='🦾' ></Emoji>
                    <Emoji symbol='🐕‍🦺' ></Emoji>
                    <Emoji symbol='🧑🏻‍🦯' ></Emoji>
                </div>
            </div>
            <div className='infoContent__2'>
                <div className='infoContent__2-text'>
                    <b>{t('info:text2-1')}</b>{t('info:text2-2')}<br /> <b>{t('info:text2-3')}</b>{t('info:text2-4')}
                </div>
            </div>
            <div className='infoContent__3'>
                <div className='infoContent__3-text'>
                    <span style={{fontSize: "32px"}}><Emoji symbol='✅' ></Emoji></span>
                    <span style={textStyle3}>{t('info:text3-1')}</span>
                </div>
                <div className='infoContent__3-text'>
                    <span style={{fontSize: "32px"}}><Emoji symbol='✅' ></Emoji></span>
                    <span style={textStyle3}>{t('info:text3-2')}</span>
                </div>
                <div className='infoContent__3-text'>
                    <span style={{fontSize: "32px"}}><Emoji symbol='✅' ></Emoji></span>
                    <span style={textStyle3}>{t('info:text3-3')}</span>
                </div>
            </div>
            <div className='infoContent__4'>
                <div className='infoContent__4-text'>
                    <b>{t('info:text4-1')}</b>{t('info:text4-2')} <br />{t('info:text4-3')}
                </div>
            </div>
            <Link className="infoContent__link" to="/building-list"><span><Emoji symbol='🏢' ></Emoji>{t('info:bd-list-link')}</span><IoChevronForward size={"3.2rem"}/> </Link>
            {i18n.language === "ko" ? <Link className="infoContent__link" to="/project"><span><Emoji symbol='✨' ></Emoji><b>프로젝트 기획 의도</b> 알아보기</span><IoChevronForward size={"3.2rem"}/> </Link> : null}
            
        </div>
    )
  }

  export default InfoContent;