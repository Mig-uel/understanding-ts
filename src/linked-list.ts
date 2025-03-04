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
  private length = 0

  add(value: T) {
    const node = new ListNode(value)

    if (!this.root) this.root = node
    else {
      let current = this.root

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++
  }
}

const numberList = new LinkedList<number>()
const nameList = new LinkedList<string>()
