const {readFileSync, writeFileSync} = require('fs')

console.log('start');

const myFile = readFileSync('./config/database/createdfile.txt','utf8');

const oldFile = readFileSync('./config/database/setting.txt','utf8');

writeFileSync('./config/database/createdfile.txt', `Add New ${oldFile}`, {flag:'a'});

console.log('done with this task');

console.log('End code and start new task');