import { atom } from "recoil";

export const currentBoardIdState = atom<string>({
  key: "currentBoardId",
  default: "Default Board",
});

export const currentTagsState = atom<number[]>({
  key: "currentTags",
  default: [],
});

export const currentGroupsState = atom<string[]>({
  key: "currentGroups",
  default: [],
});

export const selectedSchoolState = atom<string>({
  key: "selectedSchool",
  default: "none",
});
