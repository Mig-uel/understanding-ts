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

function WithTemplate(template: string, hookId: string) {
  return <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) => {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()

        const hookEl = document.getElementById(hookId) as HTMLDivElement

        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@Logger('LOGGING - PERSON') // call decorator
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Created person object...')
  }
}

const p = new Person()
console.log(p)

// property decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log('--- Property Decorator ---')
  console.log(target, propertyName)
}

// accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('---- Accessor Decorator ----')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// method decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('---- Method Decorator ----')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('---- Parameter Decorator ----')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  _price: number

  constructor(title: string, _price: number) {
    this.title = title
    this._price = _price
  }

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val
    else throw new Error('Invalid price!')
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

// returning and changing a class decorator
