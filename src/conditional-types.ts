/**
 * Conditional Types
 */

let text = 1
type StringArray = string[]
type ElementType<T> = T extends any[] ? T[number] : never

type Example1 = ElementType<StringArray>
type Example2 = ElementType<typeof text>

type FullnamePerson = {
  firstName: string
  lastName: string
}
type FullNameOrNothing<T> = T extends FullnamePerson ? string : never

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>
  }

  throw new Error('No first name and/or last name found.')
}

export {}
