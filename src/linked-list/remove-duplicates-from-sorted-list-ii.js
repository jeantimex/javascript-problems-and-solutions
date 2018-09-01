/**
 * Remove Duplicates from Sorted List II
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 *
 * Example 1:
 *
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * Example 2:
 *
 * Input: 1->1->1->2->3
 * Output: 2->3
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
  const dummy = new ListNode(0);

  let p = dummy;
  let count = 0;
  let slow = head;
  let fast = head;

  while (fast) {
    while (fast && fast.val === slow.val) {
      fast = fast.next;
      count++;
    }

    if (count === 1) {
      p.next = slow;
      p = p.next;
    }

    slow = fast;
    count = 0;
  }

  if (p) {
    p.next = null;
  }

  return dummy.next;
};

export { deleteDuplicates };
