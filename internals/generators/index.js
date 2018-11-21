const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const componentsGenerate = require('./components/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentsGenerate);
};
