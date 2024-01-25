import { defaultLocale, enUS, faIR } from "@/config/constants";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { enUSLocale, faIRLocale } from "@/locales";

const resources = {
    [enUS]: {
        translation: enUSLocale,
    },
    [faIR]: {
        translation: faIRLocale,
    },
};

i18n.use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        lng: defaultLocale, // default language
        fallbackLng: enUS,
        debug: false,
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
