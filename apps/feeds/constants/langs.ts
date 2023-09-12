export enum Lang {
  EN = "EN",
  JA = "JA",
  zhCN = "zhCN",
  zhTW = "zhTW",
  KR = "KR",
}

export const LangMap: {
  [key in Lang]: string
} = {
  EN: "English",
  JA: "日本語",
  zhCN: "简中",
  zhTW: "繁中",
  KR: "한국어",
}
