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
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId) as HTMLDivElement
    const p = new constructor()

    hookEl.innerHTML = template
    hookEl.querySelector('h1')!.textContent = p.name
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
