"use strict";
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
function countAndDescribe(element) {
    let desc = 'Got no value';
    if (element.length === 1)
        desc = `Got ${element.length} element.`;
    else if (element.length > 1)
        desc = `Got ${element.length} elements.`;
    return [element, desc];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
