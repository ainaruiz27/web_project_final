import LangContext from "../contexts/LangContext";
import React from "react";
import { I18n } from "i18n-js";
import es from "../lang/es.json";
import it from "../lang/it.json";

export default function Lang({ children }) {

    const [lang, setLang] = React.useState('it');

    const [translations, setTraslations] = React.useState({})

    const translate = (value) => {
        return translations && translations.t ? translations.t(value) : ''
    }

    React.useEffect(() => {
        const i18n = new I18n({ ...es, ...it });
        i18n.defaultLocale = lang
        i18n.locale = lang
        setTraslations(i18n);
    }, [lang])

    return (<LangContext.Provider value={{ setLang, translate, lang }}>
        {children}
    </LangContext.Provider>)

}