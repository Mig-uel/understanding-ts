class DataStorage<T extends string | number | boolean> {
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

const stringStorage = new DataStorage<string>()

stringStorage.addItem('Max')
stringStorage.addItem('Menu')
stringStorage.removeItem('Max')
console.log(stringStorage.getItems())

// const maxObj = { name: 'Max' }
// const menuObj = { name: 'Menu' }
// const objectStorage = new DataStorage<object>()
// objectStorage.addItem(maxObj)
// objectStorage.addItem(menuObj)
// objectStorage.removeItem({ name: 'Max' })
// console.log(objectStorage)
