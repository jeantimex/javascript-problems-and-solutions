/**
 * Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
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
const swapPairsR = head => {
  // Empty node or a single node
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let curr = prev.next;
  let next = curr.next;

  curr.next = prev;
  prev.next = swapPairsR(next);

  return curr;
};

/**
 * Non-Recursion
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  // Empty node or a single node
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let curr = head.next;
  let next;

  head = curr;

  while (true) {
    next = curr.next;
    curr.next = prev;

    if (next == null || next.next == null) {
      prev.next = next;
      break;
    }

    prev.next = next.next;
    curr = next.next;
    prev = next;
  }

  return head;
};

export { swapPairsR, swapPairs };
