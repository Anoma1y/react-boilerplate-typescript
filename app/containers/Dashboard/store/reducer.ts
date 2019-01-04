import { IAction } from './actions';

export const enum TYPES {
  CHANGE_NAME = 'Dashboard/CHANGE_NAME',
  CHANGE_AUTHOR = 'Dashboard/CHANGE_AUTHOR'
}

export interface IStateTypes {
  name: string,
  author: {
    name: string,
    age: string
  }
}

const INITIAL_STATE: IStateTypes = {
  name: '',
  author: {
    name: '',
    age: ''
  }
};

const HANDLERS = {
  [TYPES.CHANGE_NAME]: (state, { payload }) => ({ ...state, name: payload  }),
  [TYPES.CHANGE_AUTHOR]: (state, { payload }) => ({ ...state, author: { ...state.author, [payload.key]: payload.value }}),
};

export default (state: IStateTypes = INITIAL_STATE, action: IAction) => action.type in HANDLERS ? HANDLERS[action.type](state, action) : state;
