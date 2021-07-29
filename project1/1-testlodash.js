const _ = require('lodash');

const a = [3,[4, [5, [6 ]]]];

const flatarray = _.flatMapDeep(a);

console.log(flatarray);