/**
 * Binary Search Tree - Insert
 */

import TreeNode from 'common/tree-node';

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
export const insert = (root, key) => {
  // If the tree is empty, return a new node
  if (!root) {
    return new TreeNode(key);
  }

  // Otherwise, recur down the tree
  if (key < root.val) {
    root.left = insert(root.left, key);
  } else if (key > root.val) {
    root.right = insert(root.right, key);
  }

  // Return the (unchanged) node pointer
  return root;
};

/**
 * Iterative
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
export const insertNode = (root, key) => {
  const newNode = new TreeNode(key);

  while (root) {
    if (root.val === key) {
      return root;
    }

    if (key < root.val) {
      if (!root.left) {
        root.left = newNode;
        break;
      } else {
        root = root.left;
      }
    } else {
      if (!root.right) {
        root.right = newNode;
        break;
      } else {
        root = root.right;
      }
    }
  }

  // If the tree is empty, return a new node
  return newNode;
};
