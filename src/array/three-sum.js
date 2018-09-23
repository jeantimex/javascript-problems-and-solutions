/**
 * Three Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
 * triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const result = [];

  // Step 1. Sort the nums array
  // This can help us easily avoid duplication later on
  nums.sort((a, b) => a - b);

  // Step 2. For each possible first element nums[i]
  // Make a bidirectional 2Sum search
  for (let i = 0; i < nums.length - 2; i++) {
    // Avoid duplication
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Start the 2Sum search
    let lo = i + 1;
    let hi = nums.length - 1;
    let target = -nums[i];

    while (lo < hi) {
      if (nums[lo] + nums[hi] === target) {
        result.push([nums[i], nums[lo], nums[hi]]);

        // Skip duplication
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;

        lo++;
        hi--;
      } else if (nums[lo] + nums[hi] > target) {
        hi--;
      } else {
        lo++;
      }
    }
  }

  return result;
};
