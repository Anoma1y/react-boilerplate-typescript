import _ from 'lodash';

const isValidURL = (str: string): boolean => {
  const pattern = new RegExp(
    '^(?:(?:https?|ftp)://)' +
    '(?:\\S+(?::\\S*)?@)?' +
    '(?:' +
    '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
    '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
    '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
    '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
    '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
    '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
    '|' +
    '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
    '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
    '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
    '\\.?' +
    ')' +
    '(?::\\d{2,5})?' +
    '(?:[/?#]\\S*)?' +
    '$', 'i',
  );
  return pattern.test(str);
};

const parseParams = (str: string): object => {
  const query = {};
  const pairs = (str[0] === '?' ? str.substr(1) : str).split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};

const serializeParams = (obj: object): string => {
  const str: string[] = [];

  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (_.isArray(obj[p])) {
        str.push(`${encodeURIComponent(p)}=${obj[p]}`);
        continue;
      }

      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }

  return str.join('&');
};

export default {
  serializeParams,
  parseParams,
  isValidURL
}
