interface IAction<T = any> {
  type: T;
  payload?: any;
}

type Reducer<S = any, A extends IAction = IAction> = (state: S | undefined, action: A) => S;

type ReducersMapObject<S = any, A extends IAction = IAction> = {
  [K in keyof S]: Reducer<S[K], A>;
}

interface Dispatch<D = IAction> {
  <A extends D>(action: A): A;
}

