const fs = require('fs');
const path = require('path');

const readFiles = absPath => {
  let readedFiles = {};
  return new Promise((resolve, reject) => {
    fs.readdir(absPath, (err, datas) => {
      if (err) throw err;
      datas.forEach(async (name, idx) => {
        const stat = fs.statSync(path.join(absPath, name));
        if (stat.isDirectory()) {
          try {
            const innerReadedFiles = await readFiles(path.join(absPath, name));
            readedFiles = {
              ...readedFiles,
              ...innerReadedFiles,
            };
          } catch (e) {
            reject(e);
          }
        }
        if (stat.isFile()) {
          readedFiles[name.substr(0, name.indexOf('.'))] = path.join(absPath, name);
        }
        if (idx + 1 === datas.length) {
          return resolve(readedFiles);
        }
      });
    });
  });
};

module.exports = readFiles;
