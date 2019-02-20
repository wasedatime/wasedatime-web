import React from 'react';

import { tokenize } from './courseSearch';

export const highlight = (searchTerm, searchLang, text) => {
  if (searchTerm.length > 0) {
    const termUnion = tokenize(searchTerm).join('|');
    //Capturing parentheses () allows matched results to be included in the array.
    const regex =
      searchLang === 'en'
        ? new RegExp(`\\b(${termUnion})`, 'i')
        : new RegExp(`(${termUnion})`, 'i');
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
