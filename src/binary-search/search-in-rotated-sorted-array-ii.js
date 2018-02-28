/**
 * Search in Rotated Sorted Array II
 *
 * Follow up for "Search in Rotated Sorted Array":
 * What if duplicates are allowed?
 *
 * Would this affect the run-time complexity? How and why?
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * Write a function to determine if a given target is in the array.
 *
 * The array may contain duplicates.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  return searchUtil(nums, 0, nums.length - 1, target);
};

const searchUtil = (nums, lo, hi, target) => {
  if (lo > hi) {
    return -1;
  }

  const mid = lo + Math.floor((hi - lo) / 2);

  if (nums[mid] === target) {
    return mid;
  }

  if (nums[lo] < nums[mid]) {
    if (nums[lo] <= target && target < nums[mid]) {
      return searchUtil(nums, lo, mid - 1, target);
    } else {
      return searchUtil(nums, mid + 1, hi, target);
    }
  } else if (nums[lo] > nums[mid]) {
    if (nums[mid] < target && target <= nums[hi]) {
      return searchUtil(nums, mid + 1, hi, target);
    } else {
      return searchUtil(nums, lo, mid - 1, target);
    }
  } else {
    return searchUtil(nums, lo + 1, hi, target);
  }
};

export default search;
