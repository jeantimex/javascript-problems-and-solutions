/**
 * Subset Sum Problem
 *
 * Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.
 *
 * Examples: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
 * Output:  True  //There is a subset (4, 5) with sum 9.
 */

/**
 * Recursion
 *
 * Returns true if there is a subset of set[] with sum equal to given sum
 *
 * @param {number[]} set
 * @param {number} n
 * @param {number} sum
 * @return {boolean}
 */
const isSubsetSumR = (set, n, sum) => {
  // Base Cases
  if (sum === 0) {
    return true;
  }

  if (n === 0 && sum !== 0) {
    return false;
  }

  // If last element is greater than
  // sum, then ignore it
  if (set[n - 1] > sum) {
    return isSubsetSumR(set, n - 1, sum);
  }

  // else, check if sum can be obtained by any of the following
  // (a) including the last element
  // (b) excluding the last element
  return isSubsetSumR(set, n - 1, sum) || isSubsetSumR(set, n - 1, sum - set[n - 1]);
};

/**
 * Dynamic Programming
 *
 * Returns true if there is a subset of set[] with sum equal to given sum
 *
 * @param {number[]} set
 * @param {number} n
 * @param {number} sum
 * @return {boolean}
 */
const isSubsetSum = (set, n, sum) => {
  // The value of subset[i][j] will be true if there is a subset of
  // set[0..j-1] with sum equal to i
  const dp = Array(sum + 1)
    .fill()
    .map(() => Array(n + 1));

  // If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) {
    dp[0][i] = true;
  }

  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 1; i <= sum; i++) {
    dp[i][0] = false;
  }

  // Fill the subset table in botton up manner
  for (let i = 1; i <= sum; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i][j - 1];

      if (i >= set[j - 1]) {
        dp[i][j] = dp[i][j] || dp[i - set[j - 1]][j - 1];
      }
    }
  }

  return dp[sum][n];
};
