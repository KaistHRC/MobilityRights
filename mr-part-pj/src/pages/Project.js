import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormButton from "../components/formButton";

import "../project.css"

import booth1 from "../img/포스터.jpg";
import booth2 from "../img/성명문.jpg";

function Project() {
    
    return(
        <div className="ui-container">
            <NavBar />
            <div className="project__">
                <h1 className="facilityExp__title">프로젝트 기획의도</h1>
                <h2 className="facilityExp__name">안녕하세요, 학소위입니다.</h2>
                <article className="project-exp">
                    우리는 <b>인권 캠퍼스</b>를 만들기 위해 노력하는 KAIST학생·소수자인권위원회입니다.
                    <b> 장애인 이동권</b>은 우리가 언제나 관심을 갖고 지켜봐온 주제였어요. 
                    2018년 11월에 인권행사를 개최하여 장애인 시설 이용권 공감 부스를 진행하고, 
                    60여명의 학생들과 함께 “길은 모두에게 길이어야 한다”는 성명문을 총장님께 보낸 적이 있습니다.
                </article>
                <div className="project__container">
                    <div className="project__container-inner">
                        <img src={booth1} className="project__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>포스터</span>
                    </div>
                    <div className="project__container-inner">
                        <img src={booth2} className="project__container-img"></img>
                        <span style={{textAlign:"left", padding:"5px"}}>성명문</span>
                    </div>
                </div>
                <h2 className="facilityExp__name">비대면의 끝, 캠퍼스 생활의 시작</h2>
                <article className="project-exp">
                    <p>올해부터는 얼굴을 마주보며 소통할 수 있게 되어 다행이지만, 
                    사실 캠퍼스에서 생활하는데 어려움을 겪는 사람도 있습니다. 
                    우리는 특히 보행약자와 식이소수자의 어려움이 클 것으로 예상했습니다. </p>
                    <p>그래서, <b>모두를 위한 캠퍼스 지도</b>를 만들고자 합니다. 
                    건물 별 편의시설이나 교내 식당/카페가 제공하는 채식 옵션을 조사하고 지도를 제작해 
                    보행약자와 식이소수자들에게 정보를 제공하는 걸 목표로 하고 있습니다. 지금은 그 정보를 모으는 단계에 있어요.</p>
                </article>
               
                <h2 className="facilityExp__name">보행약자의 캠퍼스를 위해</h2>
                <article className="project-exp" style={{paddingBottom: "16px"}}>
                    <p>이 글을 읽고 계신 분들 중 대부분은 아마 우리가 붙인 포스터의 QR코드를 스캔해보신 분들일 것 같아요. 
                    건물에 포스터를 붙여서 <b>보행약자에게 필요한 편의시설들이 제대로 갖춰져 있는지</b> 사람들에게 알리면서, 
                    <b> 더불어 더 많은 건물들의 정보를 수집</b>하기 위해 참여형 프로젝트를 계획하게 됐습니다. </p>
                    <p>아직 웹사이트에 편의시설 정보가 없는 건물 중에 자주 가는 건물이 있다면, 
                    조사해보고 상품을 받아가세요! 모두를 위한 캠퍼스 지도를 만드는 데에도 큰 도움이 됩니다.</p>
                </article>
                <FormButton style={{marginBottom: "50px"}}/>

                <h2 className="facilityExp__name">목요일에 만나요!</h2>
                <article className="project-exp">
                    우리의 프로젝트에 관심이 있다면 <b>26일 목요일 오픈스페이스</b>에서 열리고, 시원한 음료수가 제공되는 <b>학소위 부스</b>로 와주세요!
                </article>

                <article className="project-exp" style={{fontSize: "1.8rem", lineHeight: "2.8rem", color: "white"}}>
                    해당 웹사이트에 문제가 있다면 페이지 하단의 연락망으로 제보 바랍니다.
                </article>
                
            </div>
            <Footer />
        </div>
    )
}
export default Project;