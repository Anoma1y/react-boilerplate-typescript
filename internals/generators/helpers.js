const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../app/components'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../../app/containers'));
const components = pageComponents.concat(pageContainers);

const checkComponentExists = comp => components.indexOf(comp[0].toUpperCase() + comp.slice(1).toLowerCase()) >= 0;

module.exports = { checkComponentExists };
