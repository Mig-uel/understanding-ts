// Decorator: a function you apply to something
function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

// decorator run when class is defined
@Logger
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object')
  }
}

const p1 = new Person()
console.log(p1)

export {}
