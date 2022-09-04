"use strict";
function addNums(n1, n2, printResult, phrase) {
    printResult ? console.log(phrase, n1 + n2) : n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const println = true;
const phrase = 'Result is:';
addNums(number1, number2, println, phrase);
