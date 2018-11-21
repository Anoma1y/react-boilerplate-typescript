const { checkComponentExists } = require('../helpers');

module.exports = {
  description: 'Add component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Component',
      choices: () => [
        'Component',
        'Stateless Function',
        'Pure Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Set component name',
      default: 'Component',
      validate: value => {
        if (/.+/.test(value)) {
          if (checkComponentExists(value)) {
            return 'A component or container with this name already exists';
          }
          return true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'needTest',
      message: 'Need test?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'needPropTypes',
      message: 'Need prop-types?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'needStyledComponents',
      message: 'Need styled-components?',
      default: true,
    },
  ],
  actions: (data) => {
    let templateComponentSrc = '';

    switch (data.type) {
      case 'Stateless Function': {
        templateComponentSrc = './components/StatelessComponent/index.js.hbs';
        break;
      }
      case 'Pure Component': {
        templateComponentSrc = './components/PureComponent/index.js.hbs';
        break;
      }
      case 'Component': {
        templateComponentSrc = './components/Component/index.js.hbs';
        break;
      }
      default: {
        templateComponentSrc = './components/Component/index.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: templateComponentSrc,
        abortOnFail: true,
      },
    ];

    if (data.needTests) {
      actions.push(      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/tests/index.test.js',
        templateFile: './components/test.js.hbs',
        abortOnFail: true,
      },);
    }

    return actions;
  },
};
