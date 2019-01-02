import { Dispatch } from 'redux';

export const enum TYPES {
  CHANGE_NAME = 'Dashboard/CHANGE_NAME',
  CHANGE_AUTHOR = 'Dashboard/CHANGE_AUTHOR'
}

export type IPromiseAuthor = {
  code: number
  status: string
}

export const changeName = (value: string) => ({ type: TYPES.CHANGE_NAME, payload: value });

export const changeAuthor = (key: string, value: string) => ({ type: TYPES.CHANGE_AUTHOR, payload: { key, value } });

export const changeThunkAuthor = (): Function => (dispatch: Dispatch): void => {
  dispatch(changeAuthor('name', 'Ivan'));
  dispatch(changeAuthor('age', '22'));
};

export const changePromiseAuthor = (name: string, age: string) => (dispatch: Dispatch): Promise<IPromiseAuthor> => new Promise((resolve): void => {
  dispatch(changeName('Test change name'));
  setTimeout(() => {
    dispatch(changeAuthor('name', name));
    dispatch(changeAuthor('age', age));
    resolve({
      code: 200,
      status: 'OK'
    });
  })
});
