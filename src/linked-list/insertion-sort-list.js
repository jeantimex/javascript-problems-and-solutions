console.clear()
/**
 * Insertion Sort List
 *
 * Sort a linked list using insertion sort.
 *
 * Algorithm of Insertion Sort:
 *
 * Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the
 * sorted list, and inserts it there.
 *
 * It repeats until no input elements remain.
 *
 * Example 1:
 *
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 *
 * Example 2:
 *
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
        this.data = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }
    isemphy() {
        return this.head == null
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isemphy()) {
            this.head = node
            this.tail = node
            this.size++
            return
        } else {
            this.tail = node
            node.next = this.head
            this.head = node
            this.size++
            return
        }
    }
    append(value) {
        let node = new Node(value)
        if (this.isemphy()) {
            this.head = node
            this.tail = node
            this.size++
            return
        } else {
            let current_node = this.head
            while (current_node.next) {
                current_node = current_node.next
            }
            current_node.next = node
            this.tail = node
            this.size++
            return
        }
    }
    removeFromEnd() {
        if (this.isemphy()) {
            return console.log(null)
        } else {
            let current_node = this.head
            while (current_node.next.value != this.tail.value) {
                current_node = current_node.next
            }
            let new_tail = new Node(current_node.value)
            this.tail = new_tail
            current_node.next = null
            this.size--
            return
        }
    }
    removeFromFront() {
        if (this.isemphy()) {
            return console.log(null)
        } else {
            this.head = this.head.next
            this.size--
        }
    }
    removeForPosition(position) {
        if (this.isemphy() || position > this.size || position < 0) {
            return console.log(false)
        } else {
            let current_node = this.head
            let current_position = 0
            while (current_position < position - 1) {
                current_node = current_node.next
                current_position++
            }
            let temp = current_node.next
            current_node.next = temp.next
            this.size--
            return
        }
    }
    search(value) {
        if (this.isemphy()) {
            return console.log(null)
        } else {
            let current_node = this.head
            while (current_node) {
                if (current_node.data == value) {
                    return true
                }
            }
            return false
        }
    }
    insertion_sort() {
        if(this.isemphy() || this.head.next == null){
            return
        }
        let sorted = null
        let current = this.head
        while(current != null){
            let nextNode = current.next
            sorted = this.sortedInsert(sorted,current)
            current = nextNode
        }
    }
    sortedInsert(sorted,new_node){

    }
    print() {
        let root = this.head
        let output = ''
        while (root) {
            output += ` ${root.data} `
            root = root.next
        }
        return console.log(output)
    }
}
let list = new LinkedList()
list.append(3)
list.append(2)
list.append(1)
list.append(4)
list.print()
