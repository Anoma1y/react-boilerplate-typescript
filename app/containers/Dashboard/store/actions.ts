export enum AT {
  CHANGE_NAME = 'Dashboard/CHANGE_NAME'
}

interface IChangeNameType {
  type: AT.CHANGE_NAME
  payload: string
}

export const changeName = (value): IChangeNameType => ({ type: AT.CHANGE_NAME, payload: value });

