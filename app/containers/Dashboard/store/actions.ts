export enum AT {
  CHANGE_NAME = 'Dashboard/CHANGE_NAME'
}

interface ChangeNameType {
  type: AT.CHANGE_NAME
  payload: string
}

export const changeName = (value): ChangeNameType => ({ type: AT.CHANGE_NAME, payload: value });

