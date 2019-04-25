const fs = require('fs');
const path = require('path');

const readFiles = absPath => {
  let readedFiles = {};
  return new Promise((resolve, reject) => {
    fs.readdir(absPath, (err, datas) => {
      if (err) reject(err);
      datas.forEach((name, idx) => {
        fs.stat(path.join(absPath, name), async (err, stat) => {
          if (err) reject(err);
          if (stat.isDirectory()) {
            const innerReaededFiles = await readFiles(path.join(absPath, name));
            readedFiles = {
              ...readedFiles,
              ...innerReaededFiles,
            };
          }
          if (stat.isFile()) {
            readedFiles[name.substr(0, name.indexOf('.'))] = path.join(absPath, name);
            if (name.match('main')) {
              readedFiles.main = ['@babel/polyfill', readedFiles.main];
            }
          }
          if (datas.length === idx + 1) {
            return resolve(readedFiles);
          }
        });
      });
    });
  });
};

module.exports = readFiles;
