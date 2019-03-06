import { Storage } from '../index';

const obj = {
  name: 'Zubenko Michail Petrovich',
  age: 25,
  is_mafioznik: true,
  bio: [1, 2, 3, "test"]
};

class LocalStorageMock {
  store: object;

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: string): string | null {
    // @ts-ignore
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    // @ts-ignore
    this.store[key] = value.toString();
  }

  removeItem(key: string) {
    // @ts-ignore
    delete this.store[key];
  }
}

describe('LocalStorageMock test', () => {
  const Store = new LocalStorageMock();

  test('get empty store', () => {
    expect(Object.keys(Store.store).length === 0).toBeTruthy();
  });

  test('set and get item', () => {
    expect(Store.getItem('test')).toBeNull();

    Store.setItem('test', 'test val')

    expect(Store.getItem('test')).toEqual('test val')
  });

  test('remove item from LocalStorage', () => {
    expect(Store.getItem('test clear')).toBeNull();

    Store.setItem('test clear', obj['name']);

    expect(Store.getItem('test clear')).toEqual(obj['name']);

    Store.removeItem('test clear');

    expect(Store.getItem('test clear')).toBeNull();
  });

  test('clear LocalStorage', () => {
    Store.setItem('test object', JSON.stringify(obj));
    Store.setItem('test string', obj['name']);

    expect(Object.keys(Store.store).length >= 2).toBeTruthy();

    Store.clear();

    expect(Object.keys(Store.store).length === 0).toBeTruthy();
  })
});

Storage.Store = new LocalStorageMock();

describe('LocalStorage test', () => {
  describe('Test setting and getting item into LocalStorage', () => {
    test('set and get item', () => {
      expect(Storage.getItem('test string')).toBeNull();
      expect(Storage.getItem('test object')).toBeNull();

      Storage.setItem('test object', obj);
      Storage.setItem('test string', obj['name']);

      expect(Storage.getItem('test string')).toEqual(obj['name']);
      expect(Storage.getItem('test object', false)).toEqual(JSON.stringify(obj));
      expect(Storage.getItem('test object')).toEqual(obj);
    });
    test('has item', () => {
      Storage.setItem('test item', 'test');

      expect(Storage.hasItem('test item')).toBeTruthy();
    });
  });

  describe('remove item from LocalStorage', () => {
    expect(Storage.getItem('test clear')).toBeNull();

    test('test remove item', () => {

      Storage.setItem('test clear', obj['name']);

      expect(Storage.getItem('test clear')).toEqual(obj['name']);

      Storage.removeItem('test clear');

      expect(Storage.getItem('test clear')).toBeNull();
    });

    test('test callback after remove item from store', () => {
      Storage.setItem('test callback', 'test');

      const callback = Storage.removeItem('test callback', true);
      const callbackUndedfnedItem = Storage.removeItem('test undefined item', true);

      expect(callbackUndedfnedItem).not.toBeTruthy();
      expect(callback).toBeTruthy();
      expect(Storage.getItem('test callback')).toBeNull();
    });
  });

  describe('clear LocalStorage', () => {
    test('test clear all store', () => {
      Storage.setItem('test object', obj);
      Storage.setItem('test string', obj['name']);

      expect(Object.keys(Storage.Store.store).length >= 2).toBeTruthy();

      Storage.clearStorage();

      expect(Object.keys(Storage.Store.store).length === 0).toBeTruthy();
    });

    test('test callback after clear store', () => {
      Storage.setItem('test object', obj);

      const callback = Storage.clearStorage(true);

      expect(callback).toBeTruthy();
    });
  })

});
