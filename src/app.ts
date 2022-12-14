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

function AutoBind(
  _: any,
  __: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

class Printer {
  private message = 'This works!'

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}

const p1 = new Printer()

const button = document.querySelector('button') as HTMLButtonElement
button.addEventListener('click', p1.showMessage)

// validation with decorators

interface ValidatorConfig {
  [property: string]: {
    [validProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  }
}

function validate(obj: any) {
  const objValidatorsConfig = registeredValidators[obj.constructor.name]

  if (!objValidatorsConfig) return true

  let isValid = true

  for (const prop in objValidatorsConfig) {
    for (const validator of objValidatorsConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && !!obj[prop]
          break
      }
    }
  }
  return isValid
}

class Course {
  @Required
  title: string

  @PositiveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form') as HTMLFormElement
courseForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const titleElement = document.getElementById('title') as HTMLInputElement
  const priceElement = document.getElementById('price') as HTMLInputElement

  const title = titleElement.value
  const price = +priceElement.value

  const course = new Course(title, price)
  console.log(course)
})
