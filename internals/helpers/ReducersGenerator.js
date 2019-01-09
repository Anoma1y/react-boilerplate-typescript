const fs = require('fs');
const APP_FOLDER_BASE = './app/';
const CONTAINERS_FOLDER_NAME = 'containers';
const STORE_FOLDER_NAME = 'store';
const REDUCER_FILE_NAME = 'reducer.ts';
const OUTPUT_FILE = APP_FOLDER_BASE + STORE_FOLDER_NAME + '/' + '_reducers.ts';

function GetReducersForScreens(path, stackPrefix = '') {
  let output = [];
  const items = fs.readdirSync(path);

  items.map((element) => {

    if (element === '.gitkeep' || element === '.gitignore') return;

    const screenItems = fs.readdirSync(path + '/' + element);

    if (
      screenItems.includes('store')
      && fs.existsSync(path + '/' + element + '/' + STORE_FOLDER_NAME + '/' + REDUCER_FILE_NAME)
    ) {
      output.push([
        stackPrefix + element,
        path + '/' + element + '/store/reducer'
      ]);
    }
    if (screenItems.includes(CONTAINERS_FOLDER_NAME)) {

      const screens = GetReducersForScreens(path + '/' + element + '/' + CONTAINERS_FOLDER_NAME, stackPrefix + element + '_');
      output = [...output, ...screens];
    }
  });
  return output;
}

function GenerateFileContents(reducers) {
  const NAME = 0;
  const FULLPATH = 1;
  let output = '// !! WARNING !!\n';
  output += '// This file is auto generated, do not edit by hand\n';
  output += '// run "yarn generate:reducers" to regenerate this file\n\n';

  let imports = [];
  let definitions = [];

  reducers.map(reducer => {
    imports.push("import " + reducer[NAME] + " from '" + reducer[FULLPATH].slice(APP_FOLDER_BASE.length) + "';");
    definitions.push(reducer[NAME]);
  });

  output += imports.join('\n', imports);
  if (imports.length) {
    output += '\n\n';
  }

  output += 'export default {\n  ';
  output += definitions.join(',\n  ') + '\n';
  output += '};\n';

  return output;
}

console.log('Analyzing ' + APP_FOLDER_BASE + CONTAINERS_FOLDER_NAME);
const reducers = GetReducersForScreens('./app/' + CONTAINERS_FOLDER_NAME);

console.log('Generating file output');
const contents = GenerateFileContents(reducers);

if (fs.existsSync(OUTPUT_FILE)) {
  console.log('Backing up previous version to "' + OUTPUT_FILE + '.bak"');
  fs.renameSync(OUTPUT_FILE, OUTPUT_FILE + '.bak');
}

console.log('Writing to "' + OUTPUT_FILE + '"');
fs.appendFileSync(OUTPUT_FILE, contents);

console.log('DONE!');
