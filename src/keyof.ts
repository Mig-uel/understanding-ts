/**
 * keyof Operator
 */

type User = {
  name: string
  age: number
}

type UserKeys = keyof User

function getProp<T extends object, U extends keyof T>(
  obj: T,
  key: U
): T[U] | never {
  const val = obj[key]

  if (val === undefined || val === null)
    throw new Error('Accessing undefined or null value')

  return val
}

const user = { name: 'Miguel', age: 25 }

const val = getProp(user, 'age')

export {}
