type DataStore = {
  [prop: string]: number | boolean
}

let store: DataStore = {}

store.id = Number.MAX_SAFE_INTEGER
store.isOpen = 0
