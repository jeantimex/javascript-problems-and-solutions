/**
 * Maximum Sum of 3 Non-Overlapping Subarrays
 *
 * In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.
 *
 * Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.
 *
 * Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are * multiple answers, return the lexicographically smallest one.
 *
 * Example:
 *
 * Input: [1,2,1,2,6,7,5,1], 2
 * Output: [0, 3, 5]
 *
 * Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
 * We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
 *
 * Note:
 * nums.length will be between 1 and 20000.
 * nums[i] will be between 1 and 65535.
 * k will be between 1 and floor(nums.length / 3).
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return number
 */
const maxSumOfThreeSubarrays = (nums, k) => {
  const n = nums.length;

  // Calculate the accumulative sum from left
  const sumLeft = [...nums];
  for (let i = 1; i < n; i++) {
    sumLeft[i] += sumLeft[i - 1];
  }

  const sumRight = [...nums];
  for (let i = n - 2; i >= 0; i--) {
    sumRight[i] += sumRight[i + 1];
  }

  // Calculate the maxLeft[] where the i-th element indicates the max subarry array seen so far from left
  const maxLeft = Array(n).fill(0);
  for (let i = k - 1; i < n; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], sumLeft[i] - sumLeft[i - k + 1] + nums[i - k + 1]);
  }

  // Calculate the maxRight[] where the i-th element indicates the max subarry array seen so far from right
  const maxRight = Array(n).fill(0);
  for (let i = n - k; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], sumRight[i] - sumRight[i + k - 1] + nums[i + k - 1]);
  }

  // Move the central subarray (or window) and get the maximum sum from both left and right sides
  let sum = 0;

  for (let i = k; i <= n - 2 * k; i++) {
    const total = sumLeft[i + k - 1] - sumLeft[i] + nums[i] + maxLeft[i - 1] + maxRight[i + k];
    sum = Math.max(sum, total);
  }

  return sum;
};

export { maxSumOfThreeSubarrays };
