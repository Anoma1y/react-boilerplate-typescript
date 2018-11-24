const { checkComponentExists } = require('../helpers');
const path = require('path');
const currentDirectory = process.env.INIT_CWD;

module.exports = {
  description: 'Add a new store',
  prompts: [
    {
      type: 'confirm',
      name: 'needIsLoading',
      message: 'Need isLoading?',
      default: true,
    },
  ],
  actions: (data) => {
    let templateComponentSrc = '';

    const actions = [
      {
        type: 'add',
        path: `${currentDirectory}/{{properCase name}}/store/reducer.js`,
        templateFile: templateComponentSrc,
        abortOnFail: true,
      },
    ];

    return actions;
  }
};
