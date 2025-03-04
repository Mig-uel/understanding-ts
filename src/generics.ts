let names: Array<string> = ['max', 'anna']

type DataStore<T> = {
  [key: string]: T
}

let store: DataStore<string | boolean> = {}
store.name = 'max'
store.instructor = true

export {}
