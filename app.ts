// const person: {
//   name: string
//   age: number
// } = {

import { TupleType } from 'typescript'

const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // tuple type
} = {
  name: 'Miguel',
  age: 23,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
}

let favoriteActivities: string[]
favoriteActivities = ['Miguel']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

// tuples: fixed length and type array
