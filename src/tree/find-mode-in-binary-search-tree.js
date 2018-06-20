/**
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * For example:
 * Given BST [1,null,2,2],
 *    1
 *     \
 *      2
 *     /
 *    2
 * return [2].
 *
 * Note: If a tree has more than one mode, you can return them in any order.
 *
 * Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion
 * does not count).
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = root => {
  // handle current count
  const handleValue = val => {
    if (val !== currVal) {
      currVal = val;
      currCount = 0;
    }
    currCount++;

    if (currCount > maxCount) {
      // found a new mode
      maxCount = currCount;
      modeCount = 1;
      modes[0] = currVal;
    } else if (currCount === maxCount) {
      // found a mode with same count
      modes[modeCount] = currVal;
      modeCount++;
    }
  };

  const inorder = node => {
    if (!node) {
      return;
    }

    inorder(node.left);
    handleValue(node.val);
    inorder(node.right);
  };

  let currVal = null;
  let currCount = 0;
  let maxCount = 0;
  let modeCount = 0;

  const modes = [];

  inorder(root);

  return modes.slice(0, modeCount);
};

export default findMode;
