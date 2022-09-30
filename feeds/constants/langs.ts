import { Lang } from "./types";

export const LangMap : {
  [key in Lang]: string;
} = {
  EN: 'English',
  JA: '日本語',
  zhCN: '简中',
  zhTW: '繁中'
};