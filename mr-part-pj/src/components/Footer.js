import React, { useState, useEffect } from "react";

import "../footer.css";
import { IoMailSharp } from "react-icons/io5"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"

function Footer() {

    return(
        <footer>
            <a className="Footer__icon" href="https://www.facebook.com/kaisthumanrightscommittee"><AiFillFacebook /></a>
            <a className="Footer__icon" href="https://www.instagram.com/kaist_hrc/"><AiFillInstagram /></a>
            <a className="Footer__icon" href="mailto:kaisthrc@gmail.com"><IoMailSharp /></a>
            <div> ⓒ 2022. KAIST HRC all rights reserved.</div>
        </footer>
    )
}
export default Footer;
