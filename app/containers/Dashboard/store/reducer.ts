type INITIAL_STATE = {
  name: string,
  textAction: string
}

const INITIAL_STATE: INITIAL_STATE = {
  name: '',
  textAction: 'test'
};

const HANDLERS = {

};

export default (state = INITIAL_STATE, action) => action.type in HANDLERS ? HANDLERS[action.type](state, action) : state;
