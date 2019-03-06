const isValidURL = (str: string): boolean => {
  const pattern = new RegExp(
    /^((?:(ht|f)tp(s)?:\/\/)|((\/\/)))?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/g
  );
  return pattern.test(str);
};

const parseParams = (str: string): object => {
  const query: any = {};
  const pairs = (str[0] === "?" ? str.substr(1) : str).split("&");

  if (str.length !== 0) {
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      const [key, val] = pair;

      if (!key || !val) {
        break;
      }

      query[decodeURIComponent(key)] = decodeURIComponent(val);
    }
  }

  return query;
};

const serializeParams = (obj: any): string => {
  const str: string[] = [];

  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (Array.isArray(obj[p])) {
        str.push(`${encodeURIComponent(p)}=${obj[p]}`);
        continue;
      }

      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }

  return str.join("&");
};

export default {
  serializeParams,
  parseParams,
  isValidURL
};
