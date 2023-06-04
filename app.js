const _= require('lodash');
require
const items = [1, [2, [3, [4]]], "t"]
const newItems = _.flattenDeep(items);
console.log(newItems);
