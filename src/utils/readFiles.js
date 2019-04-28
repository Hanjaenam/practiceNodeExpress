const fs = require('fs');
const path = require('path');

const readFiles = async absPath => {
  let readedFiles = {};
  return new Promise(async (resolve, reject) => {
    fs.readdir(absPath, async (err, datas) => {
      if (err) reject(err);
      datas.forEach(async (name, idx) => {
        fs.stat(path.join(absPath, name), async (err, stat) => {
          if (err) reject(err);
          try {
            if (stat.isDirectory()) {
              const innerReaededFiles = await readFiles(path.join(absPath, name));
              readedFiles = {
                ...readedFiles,
                ...innerReaededFiles,
              };
            }
          } catch (e) {
            throw e;
          }
          if (stat.isFile()) {
            readedFiles[name.substr(0, name.indexOf('.'))] = path.join(absPath, name);
            if (name.match('main')) {
              readedFiles.main = ['@babel/polyfill', readedFiles.main];
            }
          }
          console.log(`${name}, ${idx}`);
          if (datas.length === idx + 1) {
            return resolve(readedFiles);
          }
        });
      });
    });
  });
};
const SEARCH_FILE_PATH = path.resolve(__dirname, '..', 'assets', 'js');
readFiles(SEARCH_FILE_PATH).then(res => console.log(res));

module.exports = readFiles;
