interface IAction<T = any> {
  type: T;
  payload?: any | {
    key: string,
    value: any
  }
}

type IReducer<S = any, A extends IAction = IAction> = {
  [key: string]: (state: S | undefined, payload: A) => S
};

interface Dispatch<D = IAction> {
  <A extends D>(action: A): A;
}

interface IStateProps {
  propFromReduxStore: string
}

interface IGlobalState {
  router: any;
  Dashboard: any;
}
