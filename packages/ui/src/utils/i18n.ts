import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"
import Lang from "@/constants/type/langs"
import coreTranslationEn from "@/constants/locales/en.json"
import coreTranslationJa from "@/constants/locales/ja.json"

interface TranslationsTypes {
  [key: string]: object
}

const defaultTranslations = {
  [Lang.EN]: coreTranslationEn,
  [Lang.JA]: coreTranslationJa,
}

function i18nConfig({
  i18n,
  customTranslations = defaultTranslations,
}: {
  i18n: any
  customTranslations?: TranslationsTypes
}): void {
  const resources = {
    [Lang.EN]: {
      translation: { ...coreTranslationEn, ...customTranslations[Lang.EN] },
    },
    [Lang.JA]: {
      translation: { ...coreTranslationJa, ...customTranslations[Lang.JA] },
    },
  }

  const detectorOptions = {
    order: ["localStorage"],
    lookupLocalStorage: "wasedatime-lng",
    caches: ["localStorage"],
  }

  i18n
    .use(HttpApi)
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
    })
}

export default i18nConfig
