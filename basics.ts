function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number')
  //   throw new Error('Incorrect input!')

  printResult ? console.log(phrase, n1 + n2) : n1 + n2
}

const number1 = 5
const number2 = 2.8
const printResult = true
const phrase = 'Result is:'

add(number1, number2, printResult, phrase)
