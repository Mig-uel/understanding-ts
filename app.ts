// const person: {
//   name: string
//   age: number
// } = {

const person = {
  name: 'Miguel',
  age: 23,
  hobbies: ['Sports', 'Cooking'],
}

let favoriteActivities: string[]
favoriteActivities = ['Miguel']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
