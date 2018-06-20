/**
 * Two elements of a binary search tree (BST) are swapped by mistake.
 *
 * Recover the tree without changing its structure.
 *
 * Note:
 * A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
 *
 * The idea is simple, find the two nodes that are swapped by mistake and then swap back their values.
 * The question is how to find out those two nodes?
 *
 * As we know, an inorder traversal of BST gives us a sorted array, if two elements in the array are swapped,
 * we can find them out in one scan, that is whenever we see the previous value is larger than the current value,
 * we can mark them.
 *
 * For example, let's say we have a sorted array [0, 1] and we swap the values, so that array becomes [1, 0],
 * when we scan through, we found that 1 > 0, we know that 1 and 0 are the nodes that are swapped by mistake.
 *
 * Take another example, in this array [0, 1, 2, 5, 4, 3], 3 and 5 are swapped by mistake, when we scan the array,
 * we noticed that 5 > 4 and 4 > 3. How to get 3 and 5? Whenever we find a mistake, if it's the first one,
 * mark both nodes as "first" and "second", for the second mistake, we just have to update the "second",
 * see the codes below.
 *
 * But we are not there yet, the question asks us to use constant space, so we can't store the values of the BST
 * in an array, that will be O(n) space complexity. The solution is to use DFS and traverse the tree in inorder manner.
 *
 * So time complexity is O(n), space complexity is O(1) (if we don't care about recursion stack, otherwise it's
 * the height of the tree).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = root => {
  // first and second are the two nodes that are swapped by mistake
  let prev, first, second;

  const inorder = root => {
    if (!root) {
      return;
    }

    inorder(root.left);

    // Found a first mistake
    if (prev && prev.val > root.val) {
      if (!first) {
        first = prev; // Only set the "first" once
      }
      second = root; // Always update the "second"
    }

    prev = root;

    inorder(root.right);
  };

  inorder(root);

  // Swap the values of the two nodes
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};

export default recoverTree;
