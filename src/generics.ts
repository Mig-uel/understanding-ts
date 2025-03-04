// Generics

let names: Array<string> = ['max', 'anna']

type DataStore<T> = {
  [key: string]: T
}

let store: DataStore<string | boolean> = {}
store.name = 'max'
store.instructor = true

function merge<T, U>(a: T, b: U) {
  return [a, b]
}

const [a, b] = merge(1, 'two')

console.log(a, b)

// Generics & Constraints

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b }
}

const merged = mergeObj({ username: 'max' }, { age: 12 })
console.log(merged)

export {}
