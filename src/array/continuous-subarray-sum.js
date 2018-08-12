/**
 * Continuous Subarray Sum
 *
 * Given a list of non-negative numbers and a target integer k, write a function to check if the array
 * has a continuous subarray of size at least 2 that sums up to the multiple of k, that is,
 * sums up to n*k where n is also an integer.
 *
 * Example 1:
 *
 * Input: [23, 2, 4, 6, 7],  k=6
 * Output: True
 *
 * Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
 *
 * Example 2:
 *
 * Input: [23, 2, 6, 4, 7],  k=6
 * Output: True
 *
 * Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
 *
 * Note:
 * The length of the array won't exceed 10,000.
 * You may assume the sum of all the numbers is in the range of a signed 32-bit integer.
 */

/**
 * Solution I: Cumulative Sum
 * Time Complexity: O(n^2)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum_I = (nums, k) => {
  // step 1. store the cumulative sum in sum[]
  const sum = [...nums];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  // step 2. check the sum from nums[i] to nums[j]
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const total = sum[j] - sum[i] + nums[i];

      if (total === k || (k !== 0 && total % k === 0)) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Solution II: Utilize remaining (res + n * k)
 * Time Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
  const map = new Map([[0, -1]]);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k !== 0) {
      sum = sum % k;
    }

    if (map.has(sum)) {
      if (i - map.get(sum) >= 2) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};

export { checkSubarraySum, checkSubarraySum_I };
