interface Window {
  devToolsExtension: any;
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare interface NodeModule {
  hot: {
    accept(path?: string, callback?: () => void): void
  }
}
