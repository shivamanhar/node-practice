const {readFileSync, writeFileSync, readFile} = require('fs');

const setting = readFileSync('./config/database/setting.txt', 'utf8');

console.log(setting);

writeFileSync('./config/database/createdfile.txt', `This is my created file ${setting}`, {flag:'a'});


readFile('./config/database/createdfile.txt', 'utf8', (err, result) =>{
    if(err)
    {
        console.log(err);
        return 1;
    }
    console.log(result);
});