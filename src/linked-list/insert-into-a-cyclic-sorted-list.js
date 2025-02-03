/**
 * Insert into a Cyclic Sorted List
 *
 * Given a node from a cyclic linked list which is sorted in ascending order, write a function to insert a value into
 * the list such that it remains a cyclic sorted list. The given node can be a reference to any single node in the list,
 * and may not be necessarily the smallest value in the cyclic list.
 *
 * If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the
 * insertion, the cyclic list should remain sorted.
 *
 * If the list is empty (i.e., given node is null), you should create a new single cyclic list and return the reference
 * to that single node. Otherwise, you should return the original given node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next = null) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

console.clear()

class Node {
    constructor(value) {
        this.next = null
        this.value = value
    }
}
class LinkedList {
    constructor() {
        this.list = null
        this.tail = null
    }
    isemphy() {
        return this.list == null
    }
    insertEnd(value) {
        if (this.isemphy()) {
            this.list = new Node(value)
            this.tail = this.list
            this.size = 0
        } else {
            let node = new Node(value)
            let temp = this.list
            this.size += 1
            while (temp.next) {
                temp = temp.next
            }
            temp.next = node
            this.tail = node
            this.size += 1
        }
    }
    remove() {
        if (this.isemphy()) {
            return null
        } else {
            let temp = this.list
            while (temp.next.next) {
                temp = temp.next
            }
            temp.next = null
            this.tail = temp
            this.size = -1
        }
    }
    search(value) {
        if (this.isemphy()) {
            return null
        } else {
            let temp = this.list
            while (temp) {
                if (temp.value == value) {
                    return true
                }
                temp = temp.next
            }
            return false
        }
    }
    peek() {
        return this.list.value
    }

}

