var userInput;
var username;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string')
    username = userInput;
function error(message, code) {
    // never returns anything, crash break your script
    throw { message: message, code: code };
}
error('An error occurred!', 500);
