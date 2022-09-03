import { TupleType } from 'typescript'

enum Role {
  ADMIN, // can be assigned custom numbers or types like strings
  READ_ONLY,
  AUTHOR,
}

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

const person = {
  name: 'Miguel',
  age: 23,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN, // accessing enums
}

let favoriteActivities: string[]
favoriteActivities = ['Miguel']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
