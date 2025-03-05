/**
 * Built-In Utilities
 */

function add(a: number, b: number) {
  return a + b
}

type AddFn = typeof add

/** ReturnType */
type AddFnReturnValueType = ReturnType<AddFn>

export {}
