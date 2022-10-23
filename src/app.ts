// add constraints to generic types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB }
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
