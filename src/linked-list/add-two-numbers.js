/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import ListNode from 'common/list-node';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const f = new ListNode(0);
  let p = f;

  let c = 0;

  while (l1 || l2 || c > 0) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;
    const s = a + b + c;

    c = parseInt(s / 10, 10);

    p.next = new ListNode(s % 10);
    p = p.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return f.next;
};

export default addTwoNumbers;
