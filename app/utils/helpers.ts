type IObjectToArray = {
  id: number
  name: string
}

const objectToArray = (obj: object): IObjectToArray[] => {
  const arr: IObjectToArray[] = [];

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      const item: IObjectToArray = {
        id: parseInt(i, 10),
        name: obj[i]
      };

      arr.push(item);
    }
  }

  return arr;
};

const removeEmpty = (obj: object): object => {
  Object.keys(obj).forEach(key => (obj[key] === undefined || obj[key] === null) ? delete obj[key] : obj[key]);

  return obj;
};

export default {
  objectToArray,
  removeEmpty
}
