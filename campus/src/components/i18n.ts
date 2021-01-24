import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import detector from "i18next-browser-languagedetector";
// import backend from "i18next-xhr-backend";
// import { LNG_KEY } from "../../localForage";
import translationEN from "../constants/locales/en/translation.json";
import translationJP from "../constants/locales/jp/translation.json";

const resources = {
  "en": {
    translation: translationEN,
  },
  "jp": {
    translation: translationJP,
  },
};

// const detectorOptions = {
//   order: ["localStorage"],
//   lookupLocalStorage: LNG_KEY,
//   caches: ["localStorage"],
// };

// i18n
//   .use(backend)
//   .use(detector)


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: ".",
    interpolation: {
      // react already safes from xss
      escapeValue: false,
    },
    // Configure the withNamespaces / NamespacesConsumer to
    // not render the content until needed namespaces are loaded.
    react: {
      wait: true,
    },
    // detection: detectorOptions,
  });

export default i18n;
