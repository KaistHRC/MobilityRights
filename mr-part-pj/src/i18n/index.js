// import React from "react";
// import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en';
import ko from './locales/ko';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
        en:en,
        ko:ko
    },
    ns:['bd', 'buildingExp'],
    interpolation: {
      escapeValue: false
    }
  });

  i18n.use(LanguageDetector).init({
    // order and from where user language should be detected
    order: ['localStorage', 'navigator','cookie'],

    // keys or params to lookup language from
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    
    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  });

  export default i18n