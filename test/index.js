const path = '../package.json';
//const path = '../../package.json';
//const path = {};
//const path = Buffer.from('this is a tést');
//const path = Buffer.from('../package.json');
//const path = '';

const { isFileExistsAsync, isFileExistsSync } = require('../lib');

isFileExistsAsync(path, (valid, message) => {
  if (!valid) {
    console.log(`${valid} because ${message}`);
  } else {
    console.log(valid);
  }
});

isFileExistsAsync(path).then((p) => {
  console.log(p.valid);
}).catch(p => {
  console.log(`${p.valid} because ${p.message}`);
});

const result = isFileExistsSync(path);
if (result && !result.valid) {
  console.log(`${result.valid} because ${result.message}`);
} else {
  console.log(result.valid);
}