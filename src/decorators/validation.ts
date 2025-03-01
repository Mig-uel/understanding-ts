interface ValidatorConfig {
  [property: string]: {
    [validateable: string]: string[] // ['required', 'positive']
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, name: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [name]: ['required'],
  }
}

function PositiveNumber(target: any, name: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [name]: ['positive'],
  }
}

function validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name]

  if (!objectValidatorConfig) return true

  let isValid = true

  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case 'required': {
          isValid = isValid && !!obj[prop]
          break
        }
        case 'positive': {
          isValid = isValid && obj[prop] > 0
          break
        }
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
    this.price = p
    this.title = t
  }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const titleElement = document.getElementById('title') as HTMLInputElement
  const priceElement = document.getElementById('price') as HTMLInputElement

  const title = titleElement.value
  const price = +priceElement.value

  const course = new Course(title, price)

  if (!validate(course)) {
    alert('Invalid input, please try again!')
    return
  }
})

export {}
