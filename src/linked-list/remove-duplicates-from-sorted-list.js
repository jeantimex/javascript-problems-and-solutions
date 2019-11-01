/**
 * Remove Duplicates from Sorted List
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Example 1:
 *
 * Input: 1->1->2
 * Output: 1->2
 *
 * Example 2:
 *
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  let slow = head;
  let fast = head;

  while (fast) {
    while (fast && fast.val === slow.val) {
      fast = fast.next;
    }
    slow.next = fast;
    slow = fast;
  }

  return head;
};

export { deleteDuplicates };
