/**
 * Minimum Distance Between BST Nodes
 *
 * Given a Binary Search Tree (BST) with the root node root,
 * return the minimum difference between the values of any two different nodes in the tree.
 *
 * Example :
 *
 * Input: root = [4,2,6,1,3,null,null]
 * Output: 1
 * Explanation:
 * Note that root is a TreeNode object, not an array.
 *
 * The given tree [4,2,6,1,3,null,null] is represented by the following diagram:
 *
 *           4
 *         /   \
 *       2      6
 *      / \
 *     1   3
 *
 * while the minimum difference in this tree is 1,
 * it occurs between node 1 and node 2, also between node 3 and node 2.
 *
 * Note:
 *
 * - The size of the BST will be between 2 and 100.
 * - The BST is always valid, each node's value is an integer, and each node's value is different.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Iterative Solution
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST_I = root => {
  const stack = [];
  let curr = root;
  let prev = null;
  let min = Infinity;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();

      if (prev) {
        min = Math.min(min, Math.abs(curr.val - prev.val));
      }
      prev = curr;

      curr = curr.right;
    }
  }

  return min;
};

/**
 * Recursive Solution
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST_II = root => {
  let prev = null;
  let min = Infinity;

  const inorder = curr => {
    if (!curr) {
      return;
    }

    inorder(curr.left);

    if (prev) {
      min = Math.min(min, Math.abs(curr.val - prev.val));
    }
    prev = curr;

    inorder(curr.right);
  };

  inorder(root);
  return min;
};

export { minDiffInBST_I, minDiffInBST_II };
