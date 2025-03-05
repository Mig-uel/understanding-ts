// Decorator Factory
function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

// Advanced Decorator (Meta Programming)
function WithTemplate(template: string, hookId: string) {
  return function (target: any) {
    console.log('RENDERING TEMPLATE')

    const hookEl = document.getElementById(hookId)
    const p = new target()

    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.innerText = p.name
    }
  }
}

// Decorators execute bottom up but the factory runs top bottom
@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object')
  }
}

const p1 = new Person()
console.log(p1)

export {}
