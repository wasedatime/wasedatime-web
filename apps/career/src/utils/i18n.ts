import { initReactI18next } from "react-i18next"
import i18next from "i18next"
import { getCoreTranslation, getI18nLanguageDetector, getI18nHttpBackend, Lang } from "wasedatime-ui"
import translationEN from "@app/constants/locales/en/translation.json"
import translationJA from "@app/constants/locales/ja/translation.json"

const resources = {
  [Lang.EN]: {
    translation: { ...getCoreTranslation(Lang.EN), ...translationEN },
  },
  [Lang.JA]: {
    translation: { ...getCoreTranslation(Lang.JA), ...translationJA },
  },
}

const detectorOptions = {
  order: ["localStorage"],
  lookupLocalStorage: "wasedatime-lng",
  caches: ["localStorage"],
}

i18next
  .use(getI18nHttpBackend())
  .use(getI18nLanguageDetector())
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
    // react: {
    //   wait: true,
    // },
    detection: detectorOptions,
  })
