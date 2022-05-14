import React from "react";
import Emoji from 'a11y-react-emoji'
import { useTranslation } from "react-i18next";

import "../info-content.css"


function FormButton() {
    const {t} = useTranslation(['bd'])
    /// Fill accessibility info and get a PRIZE
    return (
        <a className= "formButton__" href="https://forms.gle/yX19jhqm1mhR8UyH7" onClick={false}>
            <b>{t('bd:formbutton-1')}</b> {t('bd:formbutton-2')} <br/>{t('bd:formbutton-3')}<Emoji symbol="🎁"/>
        </a>
    )
}
export default FormButton;