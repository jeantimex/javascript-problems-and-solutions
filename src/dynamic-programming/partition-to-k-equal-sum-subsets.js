/**
 * Partition to K Equal Sum Subsets
 *
 * Given an array of integers nums and a positive integer k, find whether it's possible to divide
 * this array into k non-empty subsets whose sums are all equal.
 *
 * Example 1:
 *
 * Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * Output: True
 * Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 *
 * Note:
 *
 * 1 <= k <= len(nums) <= 16.
 * 0 < nums[i] < 10000.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = (nums, k) => {
  // Step 1. If total sum cannot be divided by k or one of the number
  // is greater than sum/k, return false
  const sum = nums.reduce((total, num) => total + num);
  if (sum % k !== 0 || nums.some(num => num > sum / k)) {
    return false;
  }

  // Step 2. Use a hashset to track used numbers
  const used = new Set();

  // Step 3. Start the search
  return (function search(start, target) {
    // If all the numbers are used, we are done
    if (used.size === nums.length) {
      return true;
    }

    // The subset sum is too large, stop searching
    if (target < 0) {
      return false;
    }

    // If we have found one subset, continue the search till we use all the numbers
    if (target === 0) {
      return search(0, sum / k);
    }

    // Try every unused number
    for (let i = start; i < nums.length; i++) {
      if (!used.has(i)) {
        used.add(i);
        if (search(i + 1, target - nums[i])) {
          return true;
        }
        used.delete(i);
      }
    }

    return false;
  })(0, sum / k);
};

export { canPartitionKSubsets };
