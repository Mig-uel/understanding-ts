function add(n1, n2, printResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number')
    //   throw new Error('Incorrect input!')
    printResult ? console.log(phrase, n1 + n2) : n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = 'Result is:';
add(number1, number2, printResult, phrase);
