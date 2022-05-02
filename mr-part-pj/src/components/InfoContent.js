import Emoji from 'a11y-react-emoji'

import "../info-content.css"

function InfoContent() {
    return (
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
                    이동약자 접근성을 <br /> 높여주세요!
                </div>
            </div>
            
        </div>
    )
  }

  export default InfoContent;