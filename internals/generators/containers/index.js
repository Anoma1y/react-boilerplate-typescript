const { checkComponentExists } = require('../helpers');
const path = require('path');
const currentDirectory = process.env.INIT_CWD;

module.exports = {
  description: 'Add a new container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Set container name',
      default: 'Container',
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
      name: 'needPropTypes',
      message: 'Need prop-types?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'needSCSS',
      message: 'Need SCSS?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'needStyledComponents',
      message: 'Need styled components?',
      default: false,
    },
  ]
};
