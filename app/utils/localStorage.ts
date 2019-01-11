const LocalStorage = window.localStorage;

export default {
  testSupported(): boolean {
      try {
        const itemBackup = LocalStorage.getItem('');
        LocalStorage.removeItem('');
        LocalStorage.setItem('', String(itemBackup));

        if (itemBackup === null) {
          LocalStorage.removeItem('');
        } else {
          LocalStorage.setItem('', itemBackup);
        }
        return true;
      } catch (e) {
        return false;
      }
  },
  setItem<T>(key: string, value: T) {
    const StringifyValue: string = JSON.stringify(value);

    LocalStorage.setItem(key, StringifyValue);
    return true;
  },
  getItem(key: string, toParse: boolean = true): string | null {
    const data = LocalStorage.getItem(key);

    if (data === null) {
      return null;
    }

    return toParse ? JSON.parse(data) : data;
  },
  hasItem(key: string): boolean {
    return LocalStorage.getItem(key) !== null;
  },
  removeItem(key: string, callback: boolean = false): boolean | void {
    if (callback) {
      if (this.getItem(key) === null) {
        return false;
      }

      LocalStorage.removeItem(key);
      return true;
    }
    LocalStorage.removeItem(key);
  },
  clearStorage(callback: boolean = false): boolean | void {
     if (callback) {
       LocalStorage.clear();
       return true;
     }

     LocalStorage.clear();
  }
}
