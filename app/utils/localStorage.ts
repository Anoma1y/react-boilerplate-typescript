export interface ILocalStorage {
  Store: any
  setItem: <T>(key: string, value: T) => void
  getItem: (key: string, toParse?: boolean) => string | null
  hasItem: (key: string) => boolean
  removeItem: (key: string, callback?: boolean) => boolean | void
  clearStorage: (callback?: boolean) => boolean | void
}

export default<ILocalStorage> {
  Store: window.localStorage,
  setItem<T>(key: string, value: T) {
    const StringifyValue: string = JSON.stringify(value);

    this.Store.setItem(key, StringifyValue);
    return true;
  },
  getItem(key: string, toParse: boolean = true): string | null {
    const data = this.Store.getItem(key);

    if (data === null) {
      return null;
    }

    return toParse ? JSON.parse(data) : data;
  },
  hasItem(key: string): boolean {
    return this.Store.getItem(key) !== null;
  },
  removeItem(key: string, callback: boolean = false): boolean | void {
    if (callback) {
      if (this.Store.getItem(key) === null) {
        return false;
      }

      this.Store.removeItem(key);
      return true;
    }
    this.Store.removeItem(key);
  },
  clearStorage(callback: boolean = false): boolean | void {
    if (callback) {
      this.Store.clear();
      return true;
    }

    this.Store.clear();
  },
};
