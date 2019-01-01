export enum TYPES {
  CHANGE_NAME = 'Dashboard/CHANGE_NAME',
  CHANGE_AUTHOR = 'Dashboard/CHANGE_AUTHOR'
}

interface IChangeNameType {
  type: TYPES.CHANGE_NAME
  payload: string
}

export const changeName = (value: string): IChangeNameType => ({ type: TYPES.CHANGE_NAME, payload: value });

interface IChangeAuthorType {
  type: TYPES.CHANGE_AUTHOR
  payload: {
    key: string,
    value: number
  }
}

export const changeAuthor = (key: string, value: string): IChangeAuthorType => ({ type: TYPES.CHANGE_AUTHOR, payload: { key, value: Number(value) } });
