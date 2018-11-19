const path = require('path');
const copydir = require('copy-dir');
const COPY_FROM = './public';
const COPY_TO = './build';

copydir(COPY_FROM, COPY_TO, function() {
  return true;
}, function() {
  return false;
});
