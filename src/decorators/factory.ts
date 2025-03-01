// Decorator Factory
function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object')
  }
}

const p1 = new Person()
console.log(p1)

export {}
