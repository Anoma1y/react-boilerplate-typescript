import { TYPES } from './actions';

interface IStateTypes {
  name: string,
  author: {
    name: string,
    age: number
  }
}

const INITIAL_STATE: IStateTypes = {
  name: '',
  author: {
    name: '',
    age: 0
  }
};

const HANDLERS = {
  [TYPES.CHANGE_NAME]: (state, { payload }) => ({ ...state, name: payload  }),
  [TYPES.CHANGE_AUTHOR]: (state, { payload }) => ({ ...state, author: { ...state.author, [payload.key]: payload.value }}),
};

export default (state = INITIAL_STATE, action) => action.type in HANDLERS ? HANDLERS[action.type](state, action) : state;
