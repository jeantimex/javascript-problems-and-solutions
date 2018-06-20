/**
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in the
 * same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 *
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 *
 * For example, you may serialize the following tree
 *
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 *
 * as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree.
 * You do not necessarily need to follow this format, so please be creative and come up
 * with different approaches yourself.
 * Note: Do not use class member/global/static variables to store states. Your serialize
 * and deserialize algorithms should be stateless.
 */

import TreeNode from 'common/tree-node';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  if (!root) {
    return null;
  }

  const data = [];

  // Level-order traversal
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      data.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    } else {
      data.push(null);
    }
  }

  // Clean up the trailing nulls in data
  while (data.length > 0 && data[data.length - 1] === null) {
    data.pop();
  }

  return JSON.stringify(data);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {
  // Sanity checks
  try {
    data = JSON.parse(data);
  } catch (e) {
    return null;
  }
  if (!(data instanceof Array) || data.length === 0) {
    return null;
  }

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (data.length > 0) {
    const node = queue.shift();

    // Left node
    let val = data.shift();
    if (typeof val !== 'undefined' && val !== null) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    // Right node
    val = data.shift();
    if (typeof val !== 'undefined' && val !== null) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }

  return root;
};

export { serialize, deserialize };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
