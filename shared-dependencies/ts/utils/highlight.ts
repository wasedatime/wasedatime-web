import React from "react";

import { tokenize } from "@bit/wasedatime.shared-library-js.utils.course-search";
import LANGS from "@bit/wasedatime.shared-library-js.constants.langs";

export const highlight = (searchTerm, searchLang, text) => {
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
