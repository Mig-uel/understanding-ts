/**
 * ---- DECORATORS ----
 *
 * Decorators are a meta-programming feature; code that interacts with other code.
 *
 * TypeScript supports two kinds of decorators:
 * - ECMAScript (built-into JavaScript)
 * - Experimental Decorators
 *
 * Types of Decorators:
 * - Class Decorators
 * - Method Decorators
 * - Field Decorators
 * - Getter Decorators
 * - Setter Decorators
 *
 */

function Logger<T extends new (...args: any[]) => any>(
  target: T,
  context: ClassDecoratorContext
) {
  console.log('--- Logger Decorator ---')
  console.log(target) // class Person
  console.log(context) // {kind, name, metadata, addInitializer}

  // returning a new class
  return class extends target {
    // original class does not get replaced but merged
    constructor(...args: any[]) {
      super(...args)
      console.log('--- Class Constructed ---')
      console.log(this)
    }
  }
}

function AutoBind(target: Function, context: ClassMemberDecoratorContext) {
  context.addInitializer(function (this: any) {
    this[context.name] = this[context.name].bind(this)
  })

  // replace function
  return function (this: any) {
    console.log('--- Executing Original Function ---')
    target.apply(this)
  }
}

function FieldLogger(target: undefined, context: ClassFieldDecoratorContext) {
  console.log(target)
  console.log(context)

  // change field
  return (initialValue: any) => {
    console.log('--- Initial Value ---')
    return ''
  }
}

// Decorator Factory
function Replacer<T>(value: T) {
  return function (target: undefined, context: ClassFieldDecoratorContext) {
    console.log(target)
    console.log(context)

    // change field
    return (initialValue: any) => {
      console.log('--- Initial Value ---', initialValue)

      return value
    }
  }
}

@Logger
class Person {
  // @FieldLogger
  @Replacer('')
  name = 'Max'

  @AutoBind
  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}

const max = new Person()

const greet = max.greet

greet()

export {}
