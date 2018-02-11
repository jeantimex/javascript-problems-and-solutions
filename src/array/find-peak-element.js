/**
 * Find Peak Element
 *
 * A peak element is an element that is greater than its neighbors.
 *
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 *
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 *
 * You may imagine that num[-1] = num[n] = -∞.
 *
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => search(nums, 0, nums.length - 1);

const search = (nums, lo, hi) => {
  if (lo > hi) {
    return -1;
  }

  const mid = lo + Math.floor((hi - lo) / 2);

  if ((mid == 0 || nums[mid - 1] < nums[mid]) && (mid == nums.length - 1 || nums[mid] > nums[mid + 1])) {
    return mid;
  }

  if (nums[mid] < nums[mid + 1]) {
    return search(nums, mid + 1, hi);
  }
  return search(nums, lo, mid - 1);
};
