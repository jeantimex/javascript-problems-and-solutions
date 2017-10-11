/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 *
 * For example,
 * Given n = 3, there are a total of 5 unique BST's.
 *
 *    1         3     3      2      1
 *     \       /     /      / \      \
 *      3     2     1      1   3      2
 *     /     /       \                 \
 *    2     1         2                 3
 */

/**
 * Return the number of unique BSTs
 *
 * @param {number} n
 * @return {number}
 */
const numTrees = n => {
  // Sanity check
  if (n <= 0) {
    return 0;
  }

  /**
   * dp[0] represents the number of BSTs that have root node as null
   * mark it as 1 so that when we multiply the count of child nodes
   * the result is the count of the other side of child nodes.
   */
  const dp = [1];

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count += dp[j - 1] * dp[i - j];
    }
    dp[i] = count;
  }

  return dp[n];
};

export default numTrees;
