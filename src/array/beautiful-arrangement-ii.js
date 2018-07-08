/**
 * Beautiful Arrangement II
 *
 * Given two integers n and k, you need to construct a list which contains n different positive integers
 * ranging from 1 to n and obeys the following requirement:
 * Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|]
 * has exactly k distinct integers.
 *
 * If there are multiple answers, print any of them.
 *
 * Example 1:
 *
 * Input: n = 3, k = 1
 * Output: [1, 2, 3]
 *
 * Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1]
 * has exactly 1 distinct integer: 1.
 *
 * Example 2:
 *
 * Input: n = 3, k = 2
 * Output: [1, 3, 2]
 *
 * Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1]
 * has exactly 2 distinct integers: 1 and 2.
 *
 * Note:
 * The n and k are in the range 1 <= k < n <= 10^4.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = (n, k) => {
  const ans = Array(n);

  let c = 0;
  for (let v = 1; v < n - k; v++) {
    ans[c++] = v;
  }

  for (let i = 0; i <= k; i++) {
    ans[c++] = i % 2 === 0 ? n - k + Math.floor(i / 2) : n - Math.floor(i / 2);
  }

  return ans;
};

export { constructArray };
