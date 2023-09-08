import { atom } from "recoil";

export const currentBoardIdState = atom<string>({
  key: "currentBoardId",
  default: "Default Board",
});

export const currentTagsState = atom<string[]>({
  key: "currentTags",
  default: [],
});

export const currentSchoolState = atom<string[]>({
  key: "currentSchools",
  default: [],
});

export const selectedSchoolState = atom<string>({
  key: "selectedSchool",
  default: "none",
});
