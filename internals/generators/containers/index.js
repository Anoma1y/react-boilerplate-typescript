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
  ]
};
