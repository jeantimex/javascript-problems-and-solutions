/**
 * Maximum Subarray
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum
 * and return its sum.
 *
 * Example:
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 *
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which
 * is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let max = nums[0];
  let local = nums[0];

  for (let i = 1; i < nums.length; i++) {
    local = Math.max(local + nums[i], nums[i]);
    max = Math.max(local, max);
  }

  return max;
};

export { maxSubArray };
