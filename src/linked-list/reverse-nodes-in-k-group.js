/**
 * Reverse Nodes in k-Group
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a
 * multiple of k then left-out nodes in the end should remain as it is.
 *
 * Example:
 *
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 *
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be changed.
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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  // Do not reverse if the number of nodes is less than k
  if (getLength(head) < k) {
    return head;
  }

  // perform reverse
  let prev = null;
  let curr = head;
  let count = k;

  while (curr && count-- > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // prev is the new head
  // head is the new tail
  // curr is the next list

  head.next = reverseKGroup(curr, k);

  return prev;
};

const getLength = head => {
  let count = 0;
  let p = head;

  while (p) {
    p = p.next;
    count++;
  }

  return count;
};

export { reverseKGroup };
