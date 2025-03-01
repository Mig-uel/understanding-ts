function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key]
}

console.log(extractAndConvert({ name: 'Max' }, 'name'))
