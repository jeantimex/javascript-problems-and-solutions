/**
 * Reverse Linked List
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 *
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Recursion
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListR = head => {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;
  const newHead = reverseListR(next);

  head.next = null;
  next.next = head;

  return newHead;
};

/**
 * Non-Recursion
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

export { reverseList, reverseListR };
