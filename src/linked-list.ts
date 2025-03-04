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
}

const numberList = new LinkedList<number>()
const nameList = new LinkedList<string>()
