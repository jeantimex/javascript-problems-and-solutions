/**
 * Split Linked List in Parts
 *
 * Given a (singly) linked list with head node root, write a function to split the linked list
 * into k consecutive linked list "parts".
 *
 * The length of each part should be as equal as possible: no two parts should have a size differing by more than 1.
 * This may lead to some parts being null.
 *
 * The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size
 * greater than or equal parts occurring later.
 *
 * Return a List of ListNode's representing the linked list parts that are formed.
 *
 * Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
 *
 * Example 1:
 *
 * Input:
 * root = [1, 2, 3], k = 5
 * Output: [[1],[2],[3],[],[]]
 *
 * Explanation:
 *
 * The input and each element of the output are ListNodes, not arrays.
 * For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3,
 * and root.next.next.next = null.
 * The first element output[0] has output[0].val = 1, output[0].next = null.
 * The last element output[4] is null, but it's string representation as a ListNode is [].
 *
 * Example 2:
 *
 * Input:
 * root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
 * Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
 *
 * Explanation:
 * The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size
 * than the later parts.
 *
 * Note:
 *
 * The length of root will be in the range [0, 1000].
 * Each value of a node in the input will be an integer in the range [0, 999].
 * k will be an integer in the range [1, 50].
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
 * @return {ListNode[]}
 */
const splitListToParts = (head, k) => {
  // Step 1. Get the total length of the linked list
  let len = 0;
  for (let node = head; node; node = node.next) {
    len++;
  }

  // Step 2. The spread technique
  const n = Math.floor(len / k);
  let r = len % k;

  // Step 3. Initialize the result and two pointers
  let result = Array(k).fill(null);
  let prev = null;
  let curr = head;

  // Step 4. Traverse the linked list
  for (let i = 0; curr && i < k; i++, r--) {
    result[i] = curr;

    // n + (r > 0 ? 1 : 0), the spread technique
    for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
      prev = curr;
      curr = curr.next;
    }

    // cut the list
    prev.next = null;
  }

  return result;
};

export { splitListToParts };
