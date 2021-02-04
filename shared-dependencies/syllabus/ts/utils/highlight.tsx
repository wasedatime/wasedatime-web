// todo move to ui

import React from "react";

import { tokenize } from "@bit/wasedatime.syllabus.ts.utils.course-search";
import LANGS from "@bit/wasedatime.core.ts.constants.langs";

export const highlight = function (
  searchTerm: string | string[],
  searchLang: string | string[],
  text: string
): string | any[] {
  if (searchTerm.length > 0) {
    const termUnion = tokenize(searchTerm).join("|");
    //Capturing parentheses () allows matched results to be included in the array.
    let regex;
    switch (searchLang) {
      case LANGS.JP:
        regex = new RegExp(`(${termUnion})`, "i");
        break;
      case LANGS.EN:
        regex = new RegExp(`\\b(${termUnion})`, "i");
        break;
      default:
        alert("Unsupported language: " + searchLang);
    }
    const textParts = text.split(regex);
    return textParts.map((part, i) => {
      if (i % 2 === 0) {
        return part;
      }
      return <mark key={i}>{part}</mark>;
    });
  } else {
    return text;
  }
};

export default highlight;
