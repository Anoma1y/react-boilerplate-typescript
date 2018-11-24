const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const componentsGenerate = require('./components/index.js');
const containerssGenerate = require('./containers/index.js');
const storeGenerate = require('./store/index.js');
const testsGenerate = require('./tests/index.js');

module.exports = (plop) => {
  plop.setGenerator('Component', componentsGenerate);
  plop.setGenerator('Container', containerssGenerate);
  plop.setGenerator('Store', storeGenerate);
  plop.setGenerator('Test', testsGenerate);
};
