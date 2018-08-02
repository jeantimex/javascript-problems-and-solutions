/**
 * Plus One Linked List
 *
 * Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.
 *
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Example:
 *
 * Input:
 * 1->2->3
 *
 * Output:
 * 1->2->4
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
const plusOne = head => {
  if (dfs(head) === 0) {
    return head;
  }

  const newHead = new ListNode(1);
  newHead.next = head;
  return newHead;
};

/**
 * Returns the carry value
 */
const dfs = node => {
  if (node === null) {
    return 1;
  }

  const carry = dfs(node.next);

  if (carry === 0) {
    return 0;
  }

  const val = node.val + carry;
  node.val = val % 10;
  return Math.floor(val / 10);
};

export { plusOne };
