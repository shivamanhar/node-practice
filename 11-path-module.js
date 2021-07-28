const path = require('path');

console.log(path.sep);

const filePath = path.join('/config','database','setting.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absulatePath = path.resolve(__dirname, 'config', 'database','setting.txt');

console.log(absulatePath);