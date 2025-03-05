// never type
// function will never return anything

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage)

  throw new Error(errorMessage)
}
