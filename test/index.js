const path = '../package.json';
//const path = '../../package.json';
//const path = {};
//const path = Buffer.from('this is a tést');
//const path = Buffer.from('../package.json');
//const path = '';

const { isFileExistAsync, isFileExistSync } = require('../lib');

isFileExistAsync(path, (valid, message) => {
  if (!valid) {
    console.log(`${valid} because ${message}`);
  } else {
    console.log(valid);
  }
});

isFileExistAsync(path).then((p) => {
  console.log(p.valid);
}).catch(p => {
  console.log(`${p.valid} because ${p.message}`);
});

const result = isFileExistSync(path);
if (result && !result.valid) {
  console.log(`${result.valid} because ${result.message}`);
} else {
  console.log(result.valid);
}