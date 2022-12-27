import en from "../constants/locales/en/translation.json";
import ja from "../constants/locales/ja/translation.json";

export const useLocale = (locale: string) => {
  const t = locale === "en" ? en : ja;

  return { locale, t };
};