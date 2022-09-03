"use strict";
exports.__esModule = true;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string] // tuple type: tuples: fixed length and type array
// } = {
//   name: 'Miguel',
//   age: 23,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// }
var person = {
    name: 'Miguel',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Miguel'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
