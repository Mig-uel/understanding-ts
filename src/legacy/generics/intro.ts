const names: Array<string> = []

const promise = new Promise<string>((res, rej) => {
  setTimeout(() => res('This is done.'), 2000)
})

promise.then((data) => data.split(' '))
