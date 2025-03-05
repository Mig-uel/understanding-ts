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

function Logger(target: any, context: ClassDecoratorContext) {
  console.log('Logger Decorator')
  console.log(target) // class Person
  console.log(context) // {kind, name, metadata, addInitializer}
}

@Logger
class Person {
  name = 'Max'

  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}

export {}
