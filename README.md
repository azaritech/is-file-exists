# Deprecated 
## is-file-exist
Check if a file exists 

## Install
### With npm
```bash
npm install is-file-exist
``` 

### With yarn
```bash
yarn add is-file-exist
``` 
## API

### `isFileExistAsync(path, [callback])`
Check if a file exists, called asynchronously where:
- `path` - a buffer or a string.
- `callback` - an optional callback method when file checking is completed or failed with the
  signature `function(valid, message)` where:
    - `valid` - a boolean value: true when the file exist and false if there is an error.
    - `message` - a null value when valid is true and an object when valid is false.

If no `callback` is provided, a `Promise` object is returned.

### `isFileExistSync(path)`
Check if a file exists, called synchronously where:
- `path` - a buffer or a string


## Usage examples

### Asynchronous and callback
```javascript
const { isFileExistAsync } = require('is-file-exist');

isFileExistAsync('./package.json', (valid, message) => {
  if (!valid) {
    console.log(`${valid} because ${message}`);
  } else {
    console.log(valid);
  }
});

isFileExistAsync(Buffer.from('./package.json'), (valid, message) => {
  if (!valid) {
    console.log(`${valid} because ${message}`);
  } else {
    console.log(valid);
  }
});
```

### Asynchronous and promise
```javascript
const { isFileExistAsync } = require('is-file-exist');

isFileExistAsync('./package.json').then((p) => {
  console.log(p.valid);
}).catch(p => {
  console.log(`${p.valid} because ${p.message}`);
});

isFileExistAsync(Buffer.from('./package.json')).then((p) => {
  console.log(p.valid);
}).catch(p => {
  console.log(`${p.valid} because ${p.message}`);
});
```

### Synchronous
```javascript
const { isFileExistSync } = require('is-file-exist');

const resultA = isFileExistSync('./package.json');
if (resultA && !resultA.valid) {
  console.log(`${resultA.valid} because ${resultA.message}`);
} else {
  console.log(resultA.valid);
}

const resultB = isFileExistSync(Buffer.from('./package.json'));
if (resultB && !resultB.valid) {
  console.log(`${resultB.valid} because ${resultB.message}`);
} else {
  console.log(resultB.valid);
}

```
