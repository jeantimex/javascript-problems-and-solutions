/**
 * Partition List
 *
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes
 * greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 * Example:
 *
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  const dummy1 = new ListNode(0);
  const dummy2 = new ListNode(0);

  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;

  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p2) {
    p2.next = null;
  }

  if (p1) {
    p1.next = dummy2.next;
  }

  return dummy1.next;
};

export { partition };
