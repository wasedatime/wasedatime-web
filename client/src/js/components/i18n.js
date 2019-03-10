import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";

i18n
  .use(backend)
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    lng: "en",
    //fallbackLng: 'en',
    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      wait: true
    }
  });

export default i18n;
