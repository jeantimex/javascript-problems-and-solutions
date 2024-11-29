/**
 * Copy List with Random Pointer
 *
 * A linked list is given such that each node contains an additional random pointer
 * which could point to any node in the list or null.
 *
 * Return a deep copy of the list.
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

console.clear()
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isemphy() {
        return this.head == null
    }
    append(value) {
        let new_node = new Node(value)
        if (this.isemphy()) {
            this.head = new_node
            this.tail = new_node
            this.size++
            return
        } else {
            let temp = this.head
            while (temp.next) {
                temp = temp.next
            };
            temp.next = new_node
            this.tail = new_node
            this.size++
            return
        }
    }

    prepend(value) {
        let new_node = new Node(value)
        if (this.isemphy()) {
            this.head = new_node
            this.size++
            this.tail = new_node
            return
        } else {
            new_node.next = this.head
            this.head = new_node
            this.size++
            return
        }
    }
    removeFromFront() {
        if (this.isemphy()) {
            return null
        } else {
            this.head = this.head.next
            this.size--
        }
    }
    removeFromEnd() {
        if (this.isemphy()) {
            return null
        } else {
            let temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = null
            this.tail = temp
            this.head = temp
            this.size--
        }
    }
    print() {
        if (this.isemphy()) {
            return null
        } else {
            let sequence = ''
            let temp = this.head
            while (temp) {
                sequence += String(temp.value)
                temp = temp.next
            }
            return console.log(sequence)
        }
    }
    search(value) {
        if (this.isemphy()) {
            return null
        } else {
            let temp = this.head
            let index = 0
            while (temp) {
                if (temp.value == value) {
                    return index
                }
                temp = temp.next
                index += 1
            }
            return -1
        }
    }
    copyList(curr) {
        if (this.isemphy()) return null;
        if (curr > this.size) return undefined;
        let index = 0
        let temp = this.head
        while (index < curr) temp = temp.next;
        let sequencia = ''
        while (temp) {
            sequencia += String(temp.value)
            temp = temp.next
        }
        return sequencia
    }
}
class Stack {
    constructor(capacity) {
        this.stack = new LinkedList()
        this.capacity = capacity
    }
    isfull() {
        return stack.stack.size >= this.capacity
    }
    push(value) {
        if (this.isfull()) {
            return undefined
        } else {
            return this.stack.append(value)
        }
    }
    pop() {
        return this.stack.removeFromEnd()
    }
    isemphy() {
        return this.stack.isEmphy()
    }
    top() {
        return this.stack.tail
    }
    clear() {
        return this.stack.head = null
    }

    print() {
        return this.stack.print()
    }

}
class Queue {
    constructor() {
        this.queue = new LinkedList()
    }
    enqueue(value) {
        return this.queue.append(value)
    }
    dequeue() {
        return this.queue.removeFromFront()
    }
    peek() {
        return this.queue.head.value
    }
    isemphy() {
        return this.queue.isEmphy()
    }
    print() {
        return this.queue.print()
    }
}
let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
let stack = new Stack(4)
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.print()
