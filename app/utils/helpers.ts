type IObjectToArray = {
  id: number;
  name: string;
};

const objectToArray = (obj: any): IObjectToArray[] => {
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
  const modObj: any = { ...obj };

  Object.keys(modObj).forEach((key) =>
    modObj[key] === undefined || modObj[key] === null ? delete modObj[key] : modObj[key]
  );

  return modObj;
};

export default {
  objectToArray,
  removeEmpty
};
