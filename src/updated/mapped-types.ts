/**
 * Mapped Types
 */

type Operations = {
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
}

// type Results = {
//   add: number
//   subtract: number
// }

// this mapped type takes all the properties of some other object type with a value
// type Results<T> = {
//   [Key in keyof T]?: number // can make all the mapped properties optional
// }

// type Results<T> = {
//   [Key in keyof T]-?: number // -? removes the optional flag coming from the mapped type
// }

// type Results<T> = {
//   -readonly [Key in keyof T]?: number
//   // can make all the mapped properties optional and remove the readonly flag
// }

type Results<T> = {
  readonly [Key in keyof T]?: number
  // can make all the mapped properties optional and readonly
}

let mathOperations: Operations = {
  add(a, b) {
    return a + b
  },
  subtract(a, b) {
    return a - b
  },
}

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(1, 2),
}

export {}
