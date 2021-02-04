import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import coreTranslationEn from "@bit/wasedatime.core.assets.locales.en";
import coreTranslationJa from "@bit/wasedatime.core.assets.locales.ja";

interface TranslationsTypes {
  [key: string]: object;
}

const defaultTranslations = {
  [Lang.EN]: coreTranslationEn,
  [Lang.JA]: coreTranslationJa,
};

const i18nConfig = (
  customTranslations: TranslationsTypes = defaultTranslations
): void => {
  const resources = {
    [Lang.EN]: {
      translation: { ...coreTranslationEn, ...customTranslations[Lang.EN] },
    },
    [Lang.JA]: {
      translation: { ...coreTranslationJa, ...customTranslations[Lang.JA] },
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
      fallbackLng: Lang.EN,
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
