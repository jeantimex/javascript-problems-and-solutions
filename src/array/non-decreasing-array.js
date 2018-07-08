/**
 * Non-decreasing Array
 *
 * Given an array with n integers, your task is to check if it could become non-decreasing
 * by modifying at most 1 element.
 *
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 *
 * Example 1:
 *
 * Input: [4,2,3]
 * Output: True
 *
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 *
 * Example 2:
 *
 * Input: [4,2,1]
 * Output: False
 *
 * Explanation: You can't get a non-decreasing array by modify at most one element.
 *
 * Note: The n belongs to [1, 10,000].
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = nums => {
  let p = null;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (p !== null) {
        return false;
      }
      p = i;
    }
  }

  // array is sorted already
  if (p === null) {
    return true;
  }

  // only the first and last pair need to be fixed
  if (p === 0 || p === nums.length - 2) {
    return true;
  }

  // considering A[p-1], A[p], A[p+1], A[p+2]
  // e.g. 2, 4, 3, 5
  if (nums[p - 1] <= nums[p + 1]) {
    return true;
  }

  // e.g 5, 5, 4, 6
  if (nums[p] <= nums[p + 2]) {
    return true;
  }

  return false;
};

export { checkPossibility };
