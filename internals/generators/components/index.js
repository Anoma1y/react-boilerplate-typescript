const { checkComponentExists } = require('../helpers');
const path = require('path');
const currentDirectory = process.env.INIT_CWD;

module.exports = {
  description: 'Add a new component',
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
        path: `${currentDirectory}/{{properCase name}}/index.js`,
        templateFile: templateComponentSrc,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
