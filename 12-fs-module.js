const {readFileSync, writeFileSync, read} = require('fs');

const setting = readFileSync('./config/database/setting.txt', 'utf8');

console.log(setting);