/**
 * Given the root of a tree, you are asked to find the most frequent subtree sum.
 * The subtree sum of a node is defined as the sum of all the node values formed
 * by the subtree rooted at that node (including the node itself). So what is the
 * most frequent subtree sum value? If there is a tie, return all the values with
 * the highest frequency in any order.
 *
 * Examples 1
 * Input:
 *
 *   5
 *  /  \
 * 2   -3
 *
 * return [2, -3, 4], since all the values happen only once, return all of them in any order.
 * Examples 2
 * Input:
 *
 *   5
 *  /  \
 * 2   -5
 *
 * return [2], since 2 happens twice, however -5 only occur once.
 * Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findFrequentTreeSum = root => {
  if (!root) {
    return [];
  }

  const mapSum = {};
  const mapCount = {};
  let max = 0;

  const helper = node => {
    if (!node) {
      return 0;
    }

    const left = helper(node.left);
    const right = helper(node.right);
    const sum = left + node.val + right;
    const count = ~~mapSum[sum] + 1;

    // Upate the max count
    max = Math.max(max, count);

    // Update the map that maps the sum: count
    mapSum[sum] = count;

    // Update the map that maps the count: a set of sum
    if (!mapCount[count]) {
      mapCount[count] = new Set();
    }
    mapCount[count].add(sum);

    return sum;
  };

  helper(root);

  // Finally return the the set of sum in the max count bucket
  return [...mapCount[max]];
};

export default findFrequentTreeSum;
