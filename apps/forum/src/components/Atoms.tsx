import * as React from "react";
import { atom } from "recoil";
import { useRecoilState } from "recoil";

export const TagState = atom<string[]>({
  key: "tagState",
  default: [],
});
