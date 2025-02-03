/**
 * Add Two Numbers II
 *
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes
 * first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 *
 * Example:
 *
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.tail = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }
  append(value) {
    let new_node = new Node(value)
    if (this.isEmphy()) {
      this.head = new_node
      return
    } else {
      let temp = this.head
      while (temp.next) {
        temp = temp.next
      }
      temp.next = new_node
      return
    }
  }
  prepend(value) {
    let new_node = new Node(value)
    if (this.isEmphy()) {
      this.head = new_node
      return
    } else {
      new_node.next = this.head
      this.head = new_node
      return
    }
  }
  isEmphy() {
    return this.head == null
  }
  twoNodes(node1, node2) {
    let temp_node1 = node1.head
    let temp_node2 = node2.head
    let node1_res = ''
    let node2_res = ''
    while (temp_node1 || temp_node2) {
      if (temp_node1) {
        node1_res += String(temp_node1.value)
        temp_node1 = temp_node1.next
      }
      if (temp_node2) {
        node2_res += String(temp_node2.value)
        temp_node2 = temp_node2.next
      }
    }
    let resposta = Number(Number(node1_res) + Number(node2_res))
    return console.log(resposta)
  }
  removeFromFront() {
    if (this.isEmphy()) {
      return null
    } else {
      this.head = this.head.next
      return
    }
  }
  // removeFromEnd() {
  //   if (this.isEmphy()) {
  //     return null
  //   } else {
  //     let temp = this.head
  //     while (true) {
  //       if (temp.next.next == null) {
  //         temp.next = null
  //         return
  //       }
  //     }
  //   }
  // }
  print() {
    let temp = this.head
    let saida = ''
    while (temp) {
      saida += String(temp.value)
      temp = temp.next
    }
    return console.log(saida)
  }
}
console.clear()
let node1 = new LinkedList()
let node2 = new LinkedList()
let collection = []

while (collection.length < 3) {
  collection.push(Math.floor(Math.random() * 10))
  node1.append(Math.floor(Math.random() * 10))
  node2.append(Math.floor(Math.random() * 10))

}
node1.print()
node2.print()
let conj = new LinkedList()
conj.twoNodes(node1, node2)
// node1.removeFromEnd()
node1.print()

