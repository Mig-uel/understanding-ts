// add constraints to generic types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB }
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })

// more generic functions
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desc = 'Got no value'

  if (element.length === 1) desc = `Got ${element.length} element.`
  else if (element.length > 1) desc = `Got ${element.length} elements.`

  return [element, desc]
}

console.log(countAndDescribe(['Sports', 'Cooking']))

// keyof constraint example
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')

// generic classes
class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return

    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>() // textStorage will only be of type string
// textStorage.addItem(10) -> error trying to add number to a text type
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>() // numberStorage will be of type number

const objStorage = new DataStorage<object>()
objStorage.addItem({ name: 'Max' })
objStorage.addItem({ name: 'Manu' })
objStorage.removeItem({ name: 'Manu' }) // will not work because object are passed as reference
console.log(objStorage.getItems())

// generic utility types
interface CourseGoal {
  title: string
  desc: string
  completeUntil: Date
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {} // partial: makes the interface properties optional for now

  courseGoal.title = title
  courseGoal.desc = desc
  courseGoal.completeUntil = date

  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Max', 'Anna']
// names.push('Manu') -> error because it is readonly
