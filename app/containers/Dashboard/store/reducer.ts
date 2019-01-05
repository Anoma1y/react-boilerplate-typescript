import { IDashboardAction } from './actions';

export const enum TYPES {
  CHANGE_NAME = '@Dashboard/CHANGE_NAME',
  CHANGE_AUTHOR = '@Dashboard/CHANGE_AUTHOR'
}

export interface IDashboardTypes {
  name: string,
  author: {
    name: string,
    age: string
  }
}

const INITIAL_STATE: IDashboardTypes = {
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

export default (state: IDashboardTypes = INITIAL_STATE, action: IDashboardAction) => action.type in HANDLERS ? HANDLERS[action.type](state, action) : state;
