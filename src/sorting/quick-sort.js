/**
 * Quick Sort
 *
 * Lomuto's partition schema
 */

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

/**
 * Lomuto's partition scheme
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 */
const partition = (nums, lo, hi) => {
  const pivot = hi;

  let i = lo;
  let j = lo;

  while (j < hi) {
    if (nums[j] <= nums[pivot]) {
      swap(nums, i, j);
      i++;
    }
    j++;
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
