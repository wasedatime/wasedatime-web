import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import LANGS from "../config/langs";
import { LNG_KEY } from "../../localForage";

const detectorOptions = {
  order: ["localStorage"],
  lookupLocalStorage: LNG_KEY,
  caches: ["localStorage"],
};

i18n
  .use(backend)
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    fallbackLng: LANGS.EN,
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
    detection: detectorOptions,
  });

export default i18n;
