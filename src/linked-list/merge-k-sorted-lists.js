/**
 * Merge k Sorted Lists
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:
 *
 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 *
 * Divide and Conquer
 *
 * Time complexity: O(nk Log k)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  if (!lists || lists.length === 0) {
    return null;
  }

  const dummy = new ListNode(0);
  let p = dummy;

  const pq = new PriorityQueue({
    comparator: (a, b) => a.val - b.val,
  });

  // Initialize
  for (let list of lists) {
    pq.offer(list);
  }

  while (pq.size() > 0) {
    p.next = pq.poll();
    p = p.next;

    if (p.next) {
      pq.offer(p.next);
    }
  }

  return dummy.next;
};

export { mergeKLists };
