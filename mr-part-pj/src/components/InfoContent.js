import React from "react";
import Emoji from 'a11y-react-emoji'
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5"

import "../info-content.css"

function InfoContent() {
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
                <div className='infoContent__1-text'>다양한 <b>이동약자</b>와 <br /> 함께하는 <b>KAIST</b></div>
                <div className='infoContent__1-emoji'>
                    <Emoji symbol='🧑‍🦼' ></Emoji>
                    <Emoji symbol='🦾' ></Emoji>
                    <Emoji symbol='🐕‍🦺' ></Emoji>
                    <Emoji symbol='🧑🏻‍🦯' ></Emoji>
                </div>
            </div>
            <div className='infoContent__2'>
                <div className='infoContent__2-text'>
                    <b>이동약자</b>가 편한 건물은 <br /> <b>모두</b>에게 편합니다.
                </div>
            </div>
            <div className='infoContent__3'>
                <div className='infoContent__3-text'>
                    <span style={{fontSize: "32px"}}><Emoji symbol='✅' ></Emoji></span>
                    <span style={{marginLeft: "16px"}}>4층까지 계단으로 올라가다 숨이 찬 적 있다면,</span>
                </div>
                <div className='infoContent__3-text'>
                    <span style={{fontSize: "32px"}}><Emoji symbol='✅' ></Emoji></span>
                    <span style={{marginLeft: "16px"}}>자전거 타고 경사로를 찾아 건물 주위를 돌아본 적 있다면,</span>
                </div>
                <div className='infoContent__3-text'>
                    <span style={{fontSize: "32px"}}><Emoji symbol='✅' ></Emoji></span>
                    <span style={{marginLeft: "16px"}}>목발 짚고 수업 가기 힘들었던 적 있다면,</span>
                </div>
            </div>
            <div className='infoContent__4'>
                <div className='infoContent__4-text'>
                    <b>모두가 편한 캠퍼스</b>를 <br />위해 참여해주세요!
                </div>
            </div>
            <Link className="infoContent__link" to="/building-list"><span>건물 목록 보러가기</span><IoChevronForward size={"3.2rem"}/> </Link>
        </div>
    )
  }

  export default InfoContent;