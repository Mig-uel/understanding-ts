// Decorator Factory
function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

// Advanced Decorator (Meta Programming)
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    target: T
  ) {
    // override constructor
    return class extends target {
      constructor(..._: any[]) {
        super()

        const hookEl = document.getElementById(hookId)

        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.innerText = this.name
        }
      }
    }
  }
}

// @Logger('LOGGING - PERSON')
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
