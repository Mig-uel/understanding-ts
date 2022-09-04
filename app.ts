let userInput: unknown
let username: string

userInput = 5
userInput = 'Max'

if (typeof userInput === 'string') username = userInput

function error(message: string, code: number): never {
  // never returns anything, crash break your script
  throw { message, code }
}

error('An error occurred!', 500)
