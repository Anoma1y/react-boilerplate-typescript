import { AT } from './actions';

type INITIAL_STATE_TYPES = {
  name: string,
  textAction: string
}

const INITIAL_STATE: INITIAL_STATE_TYPES = {
  name: '',
  textAction: 'test'
};

const HANDLERS = {
  [AT.CHANGE_NAME]: (state, { payload }) => ({ ...state, name: payload  }),
};

export default (state = INITIAL_STATE, action) => action.type in HANDLERS ? HANDLERS[action.type](state, action) : state;
