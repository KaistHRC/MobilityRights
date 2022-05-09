import React from "react";
import Emoji from 'a11y-react-emoji'

import "../info-content.css"


function FormButton() {
    return (
        <a className= "formButton__" href="https://forms.gle/yX19jhqm1mhR8UyH7" onClick={false}>
            <b>건물 정보</b> 입력하고 <br/> 상품 받기 <Emoji symbol="🎁"/>
        </a>
    )
}
export default FormButton;