function add(n1: number, n2: number): number {
  // number means return value is a number
  return n1 + n2
}

function printResult(num: number) {
  // void means no return value (undefined)
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, callback: (a: number) => void) {
  // cb is a function that takes a number and returns nothing/void
  const result = n1 + n2

  callback(result)
}

printResult(add(5, 12))

let someValue: undefined // undefined is a valid type

let combinedValues: (a: number, b: number) => number // function type and return type and parameters
combinedValues = add

console.log(combinedValues(8, 8))

addAndHandle(10, 20, (result) => {
  console.log(result)
})
