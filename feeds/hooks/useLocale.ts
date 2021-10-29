import en from "../constants/locales/en/translation.json";
import ja from "../constants/locales/ja/translation.json";
import { useRouter } from "next/router";

export const useLocale = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : ja;

  return { locale, t };
};