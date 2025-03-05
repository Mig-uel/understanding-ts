// set constraints for the generic type by using extend
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return Object.assign(obj1, obj2)
}

type ObjectA = { name: string }
type ObjectB = { age: 30 }

// TypeScript can assume the types of the values passed or you can define them
// const mergedObject = merge<ObjectA, ObjectB>({ name: 'Max' }, { age: 30 })
const mergedObject = merge({ name: 'Max' }, { age: 30 })

// ***************************************************************

interface HasLength {
  length: number
}

function countAndDescribe<T extends HasLength>(element: T): [T, string] {
  let descriptionText = 'Got no value'

  if (element.length) {
    descriptionText = `Got ${element.length} elements`
  }

  return [element, descriptionText]
}

console.log(countAndDescribe('Hello'))
