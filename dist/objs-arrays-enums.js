"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Miguel',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ['Miguel'];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
