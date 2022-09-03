function add(n1: number, n2: number): number {
  // number means return value is a number
  return n1 + n2
}

function printResult(num: number): void {
  // void means no return value (undefined)
  console.log('Result: ' + num)
}

printResult(add(5, 12))

let someValue: undefined // undefined is a valid type

let combinedValues: (a: number, b: number) => number // function type and return type and parameters
combinedValues = add

console.log(combinedValues(8, 8))
