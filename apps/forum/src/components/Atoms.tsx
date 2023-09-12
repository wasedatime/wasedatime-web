import { atom } from "recoil";

export const TagState = atom<string[]>({
  key: "tagState",
  default: [],
});
