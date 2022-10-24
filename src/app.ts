// decorators
function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Max'

  constructor() {
    console.log('Created person object...')
  }
}

const p = new Person()
console.log(p)
