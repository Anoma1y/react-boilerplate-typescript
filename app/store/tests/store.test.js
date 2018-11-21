import configureStore from '../configureStore';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

describe('createStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore(history, {});
  });

  describe('injectedReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof store.injectedReducers).toBe('object');
    });
  });

});
