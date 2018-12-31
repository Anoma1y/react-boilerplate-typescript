module.exports = {
  defaultSeverity: 'error',
  extends: [
    'tslint:recommended',
    'tslint-react',
    'tslint-react-a11y',
    'tslint-config-airbnb',
    'tslint-config-prettier',
  ],
  rules: {
    'jsx-no-lambda': false,
    'member-access': [true, 'no-public'],
    'no-console': [true, 'log'],
    'object-literal-sort-keys': false,
    'import-name': false,
    'no-var-requires': false,
    "no-shadowed-variable": [
      true,
      {
        "class": true,
        "enum": true,
        "function": true,
        "interface": false,
        "namespace": true,
        "typeAlias": false,
        "typeParameter": false
      }
    ],
    'ordered-imports': [
      true,
      {
        'grouped-imports': true,
        'module-source-path': 'basename',
        'named-imports-order': 'any',
        'import-sources-order': 'any',
      },
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],
  },
  rulesDirectory: [],
  jsRules: {},
  linterOptions: {
    exclude: [
      "internals/**/*.js",
      "node_modules/**/*.ts",
      "app/global.d.ts"
    ]
  }
};
