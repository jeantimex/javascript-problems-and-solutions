/**
 * Smallest Subtree with all the Deepest Nodes
 *
 * Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.
 *
 * A node is deepest if it has the largest depth possible among any node in the entire tree.
 *
 * The subtree of a node is that node, plus the set of all descendants of that node.
 *
 * Return the node with the largest depth such that it contains all the deepest nodes in its subtree.
 *
 * Example 1:
 *
 * Input: [3,5,1,6,2,0,8,null,null,7,4]
 * Output: [2,7,4]
 * Explanation:
 *
 *          3
 *       /     \
 *      5       1
 *     / \     / \
 *    6   2   0   8
 *       / \
 *      7   4
 *
 * We return the node with value 2, colored in yellow in the diagram.
 * The nodes colored in blue are the deepest nodes of the tree.
 * The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
 * The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
 * Both the input and output have TreeNode type.
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
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = root => {
  return helper(root).node;
};

const helper = root => {
  if (!root) {
    return { node: null, dist: 0 };
  }

  const left = helper(root.left);
  const right = helper(root.right);

  if (left.dist > right.dist) {
    return { node: left.node, dist: left.dist + 1 };
  }

  if (left.dist < right.dist) {
    return { node: right.node, dist: right.dist + 1 };
  }

  return { node: root, dist: left.dist + 1 };
};

export { subtreeWithAllDeepest };
