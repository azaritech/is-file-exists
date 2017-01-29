'use strict';

const fs = require('fs');

module.exports.isFileExistAsync = function (pathToPackage, callback) {
  if (!callback) {
    return new Promise((resolve, reject) => {
      if (typeof(pathToPackage) === 'string' || pathToPackage instanceof Buffer) {      
        fs.access(pathToPackage, fs.constants.F_OK, (error) => {
          if (error) {
            return reject({
              valid: false,
              message: error
            });
          } else {
            return resolve({
              valid: true,
              message: null
            });
          }
        });
      }
      else {
        return reject({
          valid: false,
          message: `Type of 'path' is ${typeof(pathToPackage)}. Expected String or Buffer.`
        });
      }
    });
  } else {
    if (typeof(pathToPackage) === 'string' || pathToPackage instanceof Buffer) {
      fs.access(pathToPackage, fs.constants.F_OK, (error) => {
        if (error) {
          callback(false, error);
        } else {
          callback(true, null);
        }
      });
    } else {
      callback(false, `Type of 'path' is ${typeof(pathToPackage)}. Expected String or Buffer.`);
    }
  }
};

module.exports.isFileExistSync = function (pathToPackage) {
  if (typeof(pathToPackage) === 'string' || pathToPackage instanceof Buffer) {
    try {
      fs.accessSync(pathToPackage, fs.constants.F_OK);
      return {
        valid: true,
        message: null
      }
    } catch (error) {
      return {
        valid: false,
        message: error
      }
    }
  } else {
    return {
      valid: false,
      message: `Type of 'path' is ${typeof(pathToPackage)}. Expected String or Buffer.`
    };
  }
};