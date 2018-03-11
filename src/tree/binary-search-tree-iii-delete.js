/**
 * Binary Search Tree - Delete
 */

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
export const deleteNode = (root, key) => {
  // Base Case: If the tree is empty
  if (!root) {
    return null;
  }

  // Otherwise, recur down the tree
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // node with only one child or no child
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      // node with two children: Get the inorder successor (smallest
      // in the right subtree)
      root.key = minValue(root.right);
      // Delete the inorder successor
      root.right = deleteRec(root.right, root.key);
    }
  }

  return root;
};

const minValue = root => {
  while (root.left) {
    root = root.left;
  }
  return root.val;
};
