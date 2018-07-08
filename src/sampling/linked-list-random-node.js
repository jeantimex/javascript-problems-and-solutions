/**
 * Linked List Random Node
 *
 * Given a singly linked list, return a random node's value from the linked list.
 * Each node must have the same probability of being chosen.
 *
 * Follow up:
 * What if the linked list is extremely large and its length is unknown to you?
 * Could you solve this efficiently without using extra space?
 *
 * Example:
 *
 * // Init a singly linked list [1,2,3].
 * ListNode head = new ListNode(1);
 * head.next = new ListNode(2);
 * head.next.next = new ListNode(3);
 * Solution solution = new Solution(head);
 *
 * // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
 * solution.getRandom();
 *
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class Solution {
  /**
   * @param head The linked list's head. Note that the head is guaranteed to be not null, so it contains at least one node.
   * @param {ListNode} head
   */
  constructor(head) {
    this.head = head;
  }

  /**
   * Returns a random node's value.
   * @return {number}
   */
  getRandom() {
    let res = null;
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      if (random(0, count) === count - 1) {
        res = node.val;
      }
      node = node.next;
    }

    return res;
  }
}

export { Solution };
