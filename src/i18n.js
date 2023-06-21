import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationEN from "./assets/locales/en/translation.json";
import translationFA from "./assets/locales/fa/translation.json";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


//Creating object with the variables of imported translation files
const resources = {
    en: {
        translation: translationEN,
    },
    fa: {
        translation: translationFA,
    },
};

//define our language
export const languages = [{
    code: 'en',
    name: 'English',
    country_code: 'gb',
    dir: 'ltr'
},
{
    code: 'fa',
    name: 'فارسی',
    country_code: 'fr',
    dir: 'rtl'
}
]
//i18N Initialization

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        resources,
        supportedLngs: ['en', 'fa'],
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        react: { useSuspense: false },
    });

export default i18n;