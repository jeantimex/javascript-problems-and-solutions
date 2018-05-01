/**
 * K-th ancestor of a node in Binary Tree
 *
 * Given a binary tree in which nodes are numbered from 1 to n.
 * Given a node and a positive integer K.
 * We have to print the K-th ancestor of the given node in the binary tree.
 * If there does not exist any such ancestor then print -1.
 *
 * For example in the below given binary tree, 2nd ancestor of node 4 and 5 is 1.
 * 3rd ancestor of node 4 will be -1.
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} k
 */
const kthAncestor = (root, val, k) => {
  const helper = (root, val, k) => {
    if (!root) {
      return -1;
    }

    if (root.val === val) {
      return 0;
    }

    const l = helper(root.left, val, k);
    const r = helper(root.right, val, k);

    if (l >= 0 || r >= 0) {
      if (l + 1 === k || r + 1 === k) {
        result = root.val;
      }
      return l >= 0 ? l + 1 : r + 1;
    }

    return -1;
  };

  let result = -1;
  helper(root, val, k);
  return result;
};

export { kthAncestor };
