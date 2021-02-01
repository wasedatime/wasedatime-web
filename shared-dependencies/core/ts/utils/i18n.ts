import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import LANGS from "@bit/wasedatime.core.ts.constants.langs";
import coreTranslationEn from "@bit/wasedatime.core.assets.locales.en";
import coreTranslationJp from "@bit/wasedatime.core.assets.locales.jp";

interface TranslationsTypes {
  [key: string]: object;
}

const defaultTranslations = {
  [LANGS.EN]: coreTranslationEn,
  [LANGS.JP]: coreTranslationJp,
};

const i18nConfig = (
  customTranslations: TranslationsTypes = defaultTranslations
): void => {
  const resources = {
    [LANGS.EN]: {
      translation: { ...coreTranslationEn, ...customTranslations[LANGS.EN] },
    },
    [LANGS.JP]: {
      translation: { ...coreTranslationJp, ...customTranslations[LANGS.JP] },
    },
  };

  const detectorOptions = {
    order: ["localStorage"],
    lookupLocalStorage: "wasedatime-lng",
    caches: ["localStorage"],
  };

  i18n
    .use(backend)
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
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
};

export default i18nConfig;
