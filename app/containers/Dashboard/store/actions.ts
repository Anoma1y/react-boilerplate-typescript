import { Dispatch } from "redux";
import { TYPES } from "./reducer";

interface IAction {
  type: TYPES;
  payload: any;
}

interface IChangeNameAction extends IAction {
  type: TYPES.CHANGE_NAME;
}

export const changeName = (value: string): IChangeNameAction => ({
  type: TYPES.CHANGE_NAME,
  payload: value
});

interface IChangeAuthorAction extends IAction {
  type: TYPES.CHANGE_AUTHOR;
  payload: {
    key: string;
    value: string;
  };
}

export const changeAuthor = (key: string, value: string): IChangeAuthorAction => ({
  type: TYPES.CHANGE_AUTHOR,
  payload: { key, value }
});

export type IDashboardAction = IChangeNameAction | IChangeAuthorAction;

export const changeThunkAuthor = (): Function => (dispatch: Dispatch): void => {
  dispatch(changeAuthor("name", "Ivan"));
  dispatch(changeAuthor("age", "22"));
};

export type IPromiseAuthor = {
  code: number;
  status: string;
};

export const changePromiseAuthor = (name: string, age: string) => (dispatch: Dispatch): Promise<IPromiseAuthor> => new Promise((resolve, reject): void => {
      try {
        dispatch(changeName("Test change name"));
        setTimeout(() => {
          dispatch(changeAuthor("name", name));
          dispatch(changeAuthor("age", age));
          resolve({
            code: 200,
            status: "OK"
          });
        }, 2000);
      } catch (e) {
        reject(e);
      }
    }
  );
