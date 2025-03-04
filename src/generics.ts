let names: Array<string> = ['max', 'anna']

type DataStore<T> = {
  [key: string]: T
}

let store: DataStore<string | boolean> = {}
store.name = 'max'
store.instructor = true

function merge<T>(a: T, b: T) {
  return [a, b]
}

const [a, b] = merge(1, 2)

console.log(val)

export {}
