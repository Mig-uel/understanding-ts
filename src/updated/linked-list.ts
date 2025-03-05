/**
 * Linked List
 *
 * A data structure that stores connected values.
 *
 * The list is made up by a bunch of nodes. Each node links to the node next to it
 * (but to no other node in the overall list)
 */

class ListNode<T> {
  next?: ListNode<T>

  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>
  private tail?: ListNode<T>
  private length = 0

  add(value: T) {
    const node = new ListNode(value)

    if (!this.root || !this.tail) {
      this.root = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  getNumOfElements() {
    return this.length
  }

  print() {
    let current = this.root

    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}

const numberList = new LinkedList<number>()
numberList.add(10)
numberList.add(5)
numberList.add(-3)
numberList.add(4)
console.log(numberList.getNumOfElements())
numberList.print()
// const nameList = new LinkedList<string>()
