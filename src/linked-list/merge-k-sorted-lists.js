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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  if (!lists || lists.length === 0) {
    return null;
  }

  const merge = (a, b) => {
    if (!a || !b) {
      return a || b;
    }

    let result;

    if (a.val < b.val) {
      result = a;
      result.next = merge(a.next, b);
    } else {
      result = b;
      result.next = merge(a, b.next);
    }

    return result;
  };

  const helper = (arr, last) => {
    // repeat until only one list is left
    while (last !== 0) {
      let i = 0,
        j = last;

      // (i, j) forms a pair
      while (i < j) {
        // merge List i with List j and store
        // merged list in List i
        arr[i] = merge(arr[i], arr[j]);

        // consider next pair
        i++, j--;

        // if all pairs are merged, update last
        if (i >= j) {
          last = j;
        }
      }
    }

    return lists[0];
  };

  return helper(lists, lists.length - 1);
};

export { mergeKLists };
