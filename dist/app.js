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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'Manu' });
objStorage.removeItem({ name: 'Manu' });
console.log(objStorage.getItems());
