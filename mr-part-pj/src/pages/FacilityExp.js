import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../facility-exp.css"
import blockInside from "../img/건물내점자블록.jpeg"

function FacilityExp() {
    const {t} = useTranslation(['buildingExp'])

    return(
        <div className="ui-container">
            <NavBar />
            <div className="facilityExp__">
                <h1 className="facilityExp__title">이동약자 편의시설</h1>
                <h2 className="facilityExp__name">{t('buildingExp:road')}</h2>
                <text className="facilityExp__name-exp">이동약자, 특히 휠체어 사용자, 유모차 등의 원활한 통행을 확보하기 위해 횡단보도 진입부, 교통섬, 안전지대 등에 설치하여 보도와 차도의 단차를 줄이는 방법</text>
                <div className="facilityExp__container">
                    <img src={blockInside} className="facilityExp__container-img"></img>
                </div>
                <h2 className="facilityExp__name">{t('buildingExp:slope')}</h2>
                <text className="facilityExp__name-exp">계단이 설치된 건물 진입로에 계단을 이용하기 어려운 이동약자의 원활한 통행을 돕기 위해서 설치하는, 완만한 기울기를 가진 시설물</text>
                <div className="facilityExp__container">
                    <img src={blockInside} className="facilityExp__container-img"></img>
                </div>
                <h2 className="facilityExp__name">{t('buildingExp:tactile')}</h2>
                <text className="facilityExp__name-exp">시각장애인이 보행 상태에서 주로 발바닥이나 지팡이의 촉감으로 그 존재와 대략적인 형상을 확인할 수 있는 시설로 정해진 정보를 판독할 수 있도록 그 표면에 돌기를 붙인 것</text>
                <div className="facilityExp__container">
                    <div className="facilityExp__container-inner">
                        <img src={blockInside} className="facilityExp__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>{t('buildingExp:road_braille')}</span>
                    </div>
                    <div className="facilityExp__container-inner">
                        <img src={blockInside} className="facilityExp__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>{t('buildingExp:braille_blocks')}</span>
                    </div>
                </div>
                <h2 className="facilityExp__name">{t('buildingExp:info_braille')}</h2>
                <text className="facilityExp__name-exp">시각장애인이 시설의 공간 현황 및 이동 동선을 파악할 수 있도록 시설의 주요 동선을 돌출된 선과 점자로  표현한 안내판</text>
                <div className="facilityExp__container">
                    <img src={blockInside} className="facilityExp__container-img"></img>
                </div>
            </div>
            <Footer />
        </div>
        )
}
export default FacilityExp;