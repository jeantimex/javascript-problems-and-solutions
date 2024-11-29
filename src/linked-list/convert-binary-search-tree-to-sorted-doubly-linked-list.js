/**
 * Convert Binary Search Tree to Sorted Doubly Linked List
 *
 * Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers as synonymous
 * to the previous and next pointers in a doubly-linked list.
 *
 * We want to transform this BST into a circular doubly linked list. Each node in a doubly linked list has a
 * predecessor and successor. For a circular doubly linked list, the predecessor of the first element is the last
 * element, and the successor of the last element is the first element.
 */

// Definition for a Node.
class Node {
  constructor(prev, value) {
    this.value = value
    this.prev = prev
    this.next = null

  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null
    this.size = 0
    this.tail = null
  }
  append(value) {
    let new_node = new Node()
    if (this.ismphy()) {
      new_node.value = value
      new_node.prev = null
      this.head = new_node
      this.tail = new_node
      this.size++
    } else {
      let temp = this.head
      while (temp.next) {
        temp = temp.next
      }
      new_node.value = value
      new_node.prev = this.tail
      temp.next = new_node
      this.tail = new_node
      this.size++

    }
  }
  prepend(value) {
    if (this.ismphy()) {
      return null
    } else {
      let new_node = new Node(null, value)
      new_node.next = this.head

      new_node.next.prev = new_node
      this.head = new_node

      this.size++
    }
  }
  removeFronFront() {
    if (this.ismphy()) {
      return null
    } else {
      this.head = this.head.next
      this.size--
    }
  }
  removeFromEnd() {
    if (this.ismphy()) {
      return null
    } else {
      let temp = this.head
      while (temp.next.next) {
        temp = temp.next
      }
      this.tail = this.tail.prev
      temp.next = null
      this.size--
    }
  }
  removeFromAt(index) {
    if (this.ismphy()) {
      return null
    } else if (index > this.size) {
      return null
    } else {
      if (index == 1) {
        return this.removeFronFront()
      } else if (index == this.size) {
        return this.removeFromEnd()
      } else {
        let temp = this.head
        for (let i = 1; i < index - 1; i++) {
          temp = temp.next
        }
        temp.next.next.prev = temp
        temp.next = temp.next.next
        this.size--
      }
    }

  }
  print() {
    if (this.ismphy()) {
      return null
    } else {
      let temp = this.head
      while (temp) {
        console.log(temp.value)
        temp = temp.next
      }
    }

  }

  ismphy() {
    return this.head == null
  }
}
console.clear()
let doblelist = new DoubleLinkedList()
doblelist.append(1)
doblelist.append(2)
doblelist.append(3)
doblelist.append(5)
doblelist.append(4)
doblelist.prepend(4)
doblelist.prepend(6)
doblelist.prepend(10)
doblelist.removeFromAt(1)
doblelist.removeFromAt(1)
doblelist.removeFromAt(1)
doblelist.print()

class NodeTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  ismphy() {
    return this.root == null
  }
  insert(value) {
    let newNode = new NodeTree(value)
    if (this.ismphy()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right == null) {
        root.right = newNode

      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }
  search(root, target) {
    if (!root) {
      return false
    } else {
      if (root.value == target) {
        return true
      } else {
        if (root.value > target) {
          return this.search(root.left, target)
        } else {
          return this.search(root.right, target)
        }
      }
    }

  }
}
let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(23)
bst.insert(12)
console.log(bst.search(bst.root, 100))
