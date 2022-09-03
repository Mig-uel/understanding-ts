function add(n1, n2) {
    // number means return value is a number
    return n1 + n2;
}
function printResult(num) {
    // void means no return value (undefined)
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    // cb is a function that takes a number and returns nothing/void
    var result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));
var someValue; // undefined is a valid type
var combinedValues; // function type and return type and parameters
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
