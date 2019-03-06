import { Dispatch } from "redux";
import { TYPES } from "./reducer";

export const reset = (): IAction => ({
  type: TYPES.RESET
});

export const changeName = (value: string): IAction => ({
  type: TYPES.CHANGE_NAME,
  payload: value
});

interface IChangeAuthorAction extends IAction {
  payload: {
    key: string;
    value: string;
  };
}

export const changeAuthor = (key: string, value: string): IChangeAuthorAction => ({
  type: TYPES.CHANGE_AUTHOR,
  payload: { key, value }
});

export const changeThunkAuthor = (): Function => (dispatch: Dispatch): void => {
  dispatch(changeAuthor("name", "Ivan"));
  dispatch(changeAuthor("age", "22"));
};

export type IPromiseAuthor = {
  code: number;
  status: string;
};

export const changePromiseAuthor = (name: string, age: string) => (
  dispatch: Dispatch
): Promise<IPromiseAuthor> =>
  new Promise(
    (resolve, reject): void => {
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

// export interface IAction<TType, TPayload> {
//   type: TType;
//   payload?: TPayload;
// }
//
// export const reset = (): IAction<TYPES.RESET, void> => ({
//   type: TYPES.RESET
// });
//
// export const changeName = (value: string): IAction<TYPES.CHANGE_NAME, string> => ({
//   type: TYPES.CHANGE_NAME,
//   payload: value
// });
//
// export const changeAuthor = (key: string, value: string): IAction<TYPES.CHANGE_AUTHOR, { key: string; value: string }> => ({
//   type: TYPES.CHANGE_AUTHOR,
//   payload: { key, value }
// });
