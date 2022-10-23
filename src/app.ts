// add constraints to generic types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB }
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })

// more generic functions
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desc = 'Got no value'

  if (element.length === 1) desc = `Got ${element.length} element.`
  else if (element.length > 1) desc = `Got ${element.length} elements.`

  return [element, desc]
}

console.log(countAndDescribe(['Sports', 'Cooking']))
