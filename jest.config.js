module.exports = {
  moduleDirectories: [
    'node_modules',
    'app'
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/internals/testing/test-bundler.js',
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/internals/testing/enzyme-setup.js'
  ],
  testRegex: 'tests/.*\\.spec\\.js$',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
};
