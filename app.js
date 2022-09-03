"use strict";
// const person: {
//   name: string
//   age: number
// } = {
exports.__esModule = true;
var person = {
    name: 'Miguel',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favoriteActivities;
favoriteActivities = ['Miguel'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// tuples: fixed length and type array
