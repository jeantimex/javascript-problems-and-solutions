import TreeNode from 'common/tree-node';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serializeTree = root => {
  if (!root) {
    return null;
  }

  let data = [];

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

  return JSON.stringify(data).slice(1, -1);
};

/**
 * Decodes your encoded data to tree
 *
 * @param {string} str
 * @return {TreeNode}
 */
const deserializeTree = str => {
  if (typeof str === 'undefined' || str === null) {
    return null;
  }

  let data;

  // Sanity checks
  try {
    data = JSON.parse('[' + str + ']');
  } catch (e) {
    return null;
  }
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  let val = data.shift();
  if (typeof val === 'undefined' || val === null) {
    return null;
  }

  const root = new TreeNode(val);
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

/**
 * Clone a binary tree
 *
 * @param {TreeNode} root
 * @param {TreeNode} clone of root
 */
const cloneTree = root => {
  if (!root) {
    return null;
  }

  const clone = new TreeNode(root.val);
  clone.left = cloneTree(root.left);
  clone.right = cloneTree(root.right);

  return clone;
};

/**
 * Search a tree node in tree root
 *
 * @param {TreeNode} root
 * @param {*} val
 */
const searchTreeNode = (root, val) => {
  if (!root || root.val === val) {
    return root;
  }

  return searchTreeNode(root.left, val) || searchTreeNode(root.right, val);
};

export { serializeTree, deserializeTree, searchTreeNode, cloneTree };
