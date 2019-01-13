module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'app/utils/**/*.{ts,js}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};
