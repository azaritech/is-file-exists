# is-file-exists
Check if a file exists  

[![NPM](https://nodei.co/npm/is-file-exists.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-file-exists/)

## Install
### With npm
```bash
npm install is-file-exists
``` 

### With yarn
```bash
yarn add is-file-exists
``` 
## API

### `isFileExistsAsync(path, [callback])`
Check if a file exists, called asynchronously where:
- `path` - a buffer or a string.
- `callback` - an optional callback method when file checking is completed or failed with the
  signature `function(valid, message)` where:
    - `valid` - a boolean value: true when the file exists and false if there is an error.
    - `message` - a null value when valid is true and an object when valid is false.

If no `callback` is provided, a `Promise` object is returned.

### `isFileExistsSync(path)`
Check if a file exists, called synchronously where:
- `path` - a buffer or a string


## Usage examples

### Asynchronous and callback
```javascript
const { isFileExistsAsync } = require('is-file-exists');

isFileExistsAsync('./package.json', (valid, message) => {
  if (!valid) {
    console.log(`${valid} because ${message}`);
  } else {
    console.log(valid);
  }
});

isFileExistsAsync(Buffer.from('./package.json'), (valid, message) => {
  if (!valid) {
    console.log(`${valid} because ${message}`);
  } else {
    console.log(valid);
  }
});
```

### Asynchronous and promise
```javascript
const { isFileExistsAsync } = require('is-file-exists');

isFileExistsAsync('./package.json').then((p) => {
  console.log(p.valid);
}).catch(p => {
  console.log(`${p.valid} because ${p.message}`);
});

isFileExistsAsync(Buffer.from('./package.json')).then((p) => {
  console.log(p.valid);
}).catch(p => {
  console.log(`${p.valid} because ${p.message}`);
});
```

### Synchronous
```javascript
const { isFileExistsSync } = require('is-file-exists');

const resultA = isFileExistsSync('./package.json');
if (resultA && !resultA.valid) {
  console.log(`${resultA.valid} because ${resultA.message}`);
} else {
  console.log(resultA.valid);
}

const resultB = isFileExistsSync(Buffer.from('./package.json'));
if (resultB && !resultB.valid) {
  console.log(`${resultB.valid} because ${resultB.message}`);
} else {
  console.log(resultB.valid);
}

```
