export type FeedInfo = {
  date: string;
  partner: string;
  title: string;
  lang: string;
  authors: string[];
};

export enum Lang {
  EN = "EN",
  JA = "JA",
  zhCN = "zhCN",
  zhTW = "zhTW"
};
