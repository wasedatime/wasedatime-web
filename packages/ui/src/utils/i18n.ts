import detector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"
import coreTranslationEn from "@/constants/locales/en.json"
import coreTranslationJa from "@/constants/locales/ja.json"
import { Lang } from "@/constants/type/langs"

export const getCoreTranslation = (lang: Lang) => lang === Lang.EN ? coreTranslationEn : coreTranslationJa;
export const getI18nLanguageDetector = () => detector;
export const getI18nHttpBackend = () => HttpApi;