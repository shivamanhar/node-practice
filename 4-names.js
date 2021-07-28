// local
const secret ='SUPER SECRET';

//share
const john = 'john';
const peter = 'peter';

// share function 
const greeting = (name) =>{
    console.log(`Hello ${name}`);
}
// print(module)
module.exports = {john, peter, greeting}

//export default;