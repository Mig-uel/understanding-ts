"use strict";
let userInput;
let username;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string')
    username = userInput;
function error(message, code) {
    throw { message, code };
}
error('An error occurred!', 500);
