import React from 'react';
import Hashtag from '../components/Hashtag';

const HTTP_PATTERN = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
const HASHTAG_PATTERN = /#[a-zA-Z0-9]+/gi;

function formatLink(link, id) {
  return (
    <a key={`${link}${id}`} href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
  );
}

function formatHashtag(text, id) {
  return (
    <Hashtag key={`hashtag${text.slice(1)}${id}`} text={text} />
  );
}

function appendIfNotIncluded(array, item) {
  return array.includes(item) ? array : [...array, item];
}

function prependValue(array, value, formatFunction) {
  return array
    .reduce((result, notValue, i) => [...result, formatFunction(value, i), notValue], []);
}

function replaceGlobally(text, value, formatFunction) {
  const notLinks = text.split(value);
  return [
    notLinks[0],
    ...prependValue(notLinks.slice(1), value, formatFunction),
  ];
}

function formatString(formatted, replaceValues, formatFunction) {
  let result = [...formatted];

  for (const replaceValue of replaceValues) {
    let aux = [];
    for (const part of result) {
      if (typeof part === 'string') {
        aux = [...aux, ...replaceGlobally(part, replaceValue, formatFunction)];
      } else {
        aux = [...aux, part];
      }
    }
    result = aux;
  }

  return result;
}

export default function formatDescription(text) {
  const links = text.match(HTTP_PATTERN) || [];
  const uniqueLinks = links.reduce(appendIfNotIncluded, []);

  const hashtags = text.match(HASHTAG_PATTERN) || [];
  const uniqueHashtags = hashtags.reduce(appendIfNotIncluded, []);

  let formatted = [text];
  formatted = formatString(formatted, uniqueLinks, formatLink);
  formatted = formatString(formatted, uniqueHashtags, formatHashtag);


  return formatted;
}