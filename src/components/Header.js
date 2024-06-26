import React from "react";
import Logo from "../images/logo.JPG"
import LangContext from "../contexts/LangContext";


export default function Header({ handleUpdateLanguage }) {

    const lang = React.useContext(LangContext);

    const handleLang = () => {
        const newLang = lang.lang === 'it' ? 'es' : 'it'
        lang.setLang(newLang);
        handleUpdateLanguage(newLang);
    }
    return (<>
        <header id="header" className="alt header">
            <button className="header__lang" onClick={handleLang}>{lang.translate('change-lang')}</button>
            <span className="header__logo"><img src={Logo} alt="" /></span>
            <h1>Fabio Cellamare</h1>
            <p>Trasforma il tuo corpo, realizza i tuoi sogni <a href="https://twitter.com/ajlkn"></a> <a href="https://html5up.net"></a>
            </p>
        </header>
    </>)
}