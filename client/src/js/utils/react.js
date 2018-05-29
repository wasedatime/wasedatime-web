import React from 'react';

import { tokenize } from './courseSearch';

export const highlight = (searchTerm, text) => {
  if (searchTerm.length > 1) {
    const termUnion = tokenize(searchTerm)
      .map(term => {
        const cleanTerm = term.trim().replace(/\W+/g, '\\W+');
        return cleanTerm;
      })
      .join('|');
    const regex = new RegExp(`\\b(${termUnion})`, 'i');
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
