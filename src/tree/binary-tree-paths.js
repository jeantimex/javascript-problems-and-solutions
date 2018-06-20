/**
 * Given a binary tree, return all root-to-leaf paths.
 *
 * For example, given the following binary tree:
 *
 *    1
 *  /   \
 * 2     3
 *  \
 *   5
 * All root-to-leaf paths are:
 *
 * ["1->2->5", "1->3"]
 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = root => {
  const helper = (node, path) => {
    if (!node) {
      return;
    }

    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(path.join('->'));
    } else {
      helper(node.left, path);
      helper(node.right, path);
    }

    path.pop();
  };

  const result = [];
  helper(root, []);
  return result;
};

export default binaryTreePaths;
