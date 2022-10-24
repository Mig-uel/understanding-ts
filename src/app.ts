// decorators

/*
  function Logger(constructor: Function) {
    console.log('LOGGING...')
    console.log(constructor)
  }

  @Logger
*/

// Decorator Factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON') // call decorator
class Person {
  name = 'Max'

  constructor() {
    console.log('Created person object...')
  }
}

const p = new Person()
console.log(p)
