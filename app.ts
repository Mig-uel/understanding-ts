// type aliases can be used to create custom types

/* ---- Object Types ---- 

type User = { name: string; age: number; }

function greet(user: {name: string; age: number}) { // simplify to user: User
  console.log('Hi, I am ' + user.name)
}

function isOlder(user: {name: string; age: number}, age: number) { // simplify to user: User, age: number
  return checkAge > user.age
}

*/

type Combinable = number | string // union types
type LiteralType = 'as-number' | 'as-text'

function combine(
  input1: Combinable, // union types
  input2: Combinable, // union types
  resultType: LiteralType //'as-number' | 'as-text' // literal types
) {
  let result

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }

  if (resultType === 'as-number') {
    return +result
  } else {
    return result.toString()
  }

  return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine(30, 26, 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames)
