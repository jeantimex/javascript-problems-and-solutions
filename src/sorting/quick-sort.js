/**
 * Quick Sort
 *
 * Lomuto's partition schema
 */

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

/**
 * Lomuto's partition scheme
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 */
const partition = (nums, lo, hi) => {
  for (var i = lo, j = lo; j < hi; j++) {
    if (nums[j] <= nums[hi]) {
      swap(nums, i++, j);
    }
  }

  swap(nums, i, j);

  return i;
};

/**
 * Quick sort helper - Returns sorted nums
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 */
const sort = (nums, lo, hi) => {
  if (lo >= hi) {
    return;
  }

  const pivot = partition(nums, lo, hi);

  sort(nums, lo, pivot - 1);
  sort(nums, pivot + 1, hi);
};

/**
 * Quick sort
 *
 * @param {number[]} nums
 */
const quickSort = nums => sort(nums, 0, nums.length - 1);

export default quickSort;
