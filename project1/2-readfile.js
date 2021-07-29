const {readFile} = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');

const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, data) =>{
            if(err)
            {
                reject(err);
            } else{
                resolve(data);
            }

        })
    })
}

getText('../config/database/createdfile.txt').then((result)=>console.log(result)).catch((error)=>console.log(error));