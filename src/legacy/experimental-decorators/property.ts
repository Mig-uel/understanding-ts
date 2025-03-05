// Property Decorators
// Executes when class definition is registered by JavaScript
function Log(target: any, propertyName: string | Symbol) {
  console.log('PROPERTY DECORATOR')
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('ACCESSOR DECORATOR')

  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('METHOD DECORATOR')

  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('PARAMETER DECORATOR')

  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  // @Log
  title: string

  private _price: number

  constructor(t: string, p: number) {
    this._price = p
    this.title = t
  }

  // @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }

  // @Log2
  set price(val: number) {
    if (val > 0) this._price = val
    else throw new Error('Invalid Price!')
  }
}

export {}
