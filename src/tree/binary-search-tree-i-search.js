/**
 * Binary Search Tree - Search
 */

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
export const search = (root, key) => {
  if (!root || root.val === key) {
    return root;
  }

  if (key < root.val) {
    return search(root.left, key);
  }

  return search(root.right, key);
};

/**
 * Iterative
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
export const searchNode = (root, key) => {
  while (root) {
    if (root.val === key) {
      return root;
    }

    if (key < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return null;
};
