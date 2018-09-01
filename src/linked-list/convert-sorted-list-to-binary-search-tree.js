/**
 * Convert Sorted List to Binary Search Tree
 *
 * Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two
 * subtrees of  *every node never differ by more than 1.
 *
 * Example:
 *
 * Given the sorted linked list: [-10,-3,0,5,9],
 *
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
 *
 *      0
 *     / \
 *   -3   9
 *   /   /
 * -10  5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = head => {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return new TreeNode(head.val);
  }

  // Find the previous node of middle node
  const node = findMiddle(head);
  const middle = node.next;
  node.next = null;

  const root = new TreeNode(middle.val);

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(middle.next);

  return root;
};

const findMiddle = head => {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev;
};

export { sortedListToBST };
