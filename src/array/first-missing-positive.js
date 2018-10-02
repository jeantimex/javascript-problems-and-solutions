/**
 * First Missing Positive
 *
 * Given an unsorted integer array, find the smallest missing positive integer.
 *
 * Example 1:
 *
 * Input: [1,2,0]
 * Output: 3
 *
 * Example 2:
 *
 * Input: [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 *
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 * Note:
 *
 * Your algorithm should run in O(n) time and uses constant extra space.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
const firstMissingPositive = A => {
  const n = A.length;

  let i = 0;
  while (i < n) {
    if (A[i] > 0 && A[i] <= n && A[i] !== A[A[i] - 1]) swap(A, i, A[i] - 1);
    else i++;
  }

  i = 0;
  while (i < n && A[i] === i + 1) {
    i++;
  }

  return i + 1;
};

const swap = (A, i, j) => ([A[i], A[j]] = [A[j], A[i]]);

export { firstMissingPositive };
