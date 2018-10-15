/**
 * Pascal's Triangle II
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 * Example:
 *
 * Input: 3
 * Output: [1,3,3,1]
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} k
 * @return {number[]}
 */
const getRow = k => {
  // Initialize
  const arr = Array(k + 1).fill(0);
  arr[0] = 1;

  for (let i = 1; i <= k; i++) {
    for (let j = i; j > 0; j--) {
      arr[j] = arr[j] + arr[j - 1];
    }
  }

  return arr;
};

export { getRow };
