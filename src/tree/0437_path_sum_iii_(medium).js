/**
 * You are given a binary tree in which each node contains an integer value.
 *
 * Find the number of paths that sum to a given value.
 *
 * The path does not need to start or end at the root or a leaf, but it must go downwards
 * (traveling only from parent nodes to child nodes).
 *
 * The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
 *
 * Example:
 *
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 *
 *       10
 *      /  \
 *     5   -3
 *    / \    \
 *   3   2   11
 *  / \   \
 * 3  -2   1
 *
 * Return 3. The paths that sum to 8 are:
 *
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3. -3 -> 11
 */

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSumR = (root, sum) => {
  if (!root) {
    return 0;
  }
  return pathSumFrom(root, sum) + pathSumR(root.left, sum) + pathSumR(root.right, sum);
};

const pathSumFrom = (node, sum) => {
  if (!node) {
    return 0;
  }

  return (node.val === sum ? 1 : 0) + pathSumFrom(node.left, sum - node.val) + pathSumFrom(node.right, sum - node.val);
};

/**
 * Prefix Sum
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  const helper = (root, current, sum, prefixSum) => {
    if (!root) {
      return 0;
    }

    current += root.val;

    var count = ~~prefixSum[current - sum];

    prefixSum[current] = ~~prefixSum[current] + 1;
    count += helper(root.left, current, sum, prefixSum) + helper(root.right, current, sum, prefixSum);
    prefixSum[current]--;

    return count;
  };

  return helper(root, 0, sum, { 0: 1 });
};

export { pathSumR, pathSum };
