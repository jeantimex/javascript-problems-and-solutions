/**
 * Quick Sort II
 *
 * Hoare's partition scheme
 * Hoare's Partition Scheme works by initializing two indexes that start at two ends,
 * the two indexes move toward each other until an inversion is (A smaller value on
 * left side and greater value on right side) found. When an inversion is found, two
 * values are swapped and process is repeated.
 *
 * Hoare's scheme is more efficient than Lomuto’s partition scheme because it does
 * three times fewer swaps on average, and it creates efficient partitions even when
 * all values are equal.
 */

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

/**
 * Hoare's partition scheme
 * Hoare's Partition Scheme works by initializing two indexes that start at two ends,
 * the two indexes move toward each other until an inversion is (A smaller value on
 * left side and greater value on right side) found. When an inversion is found, two
 * values are swapped and process is repeated.
 *
 * Hoare's scheme is more efficient than Lomuto’s partition scheme because it does
 * three times fewer swaps on average, and it creates efficient partitions even when
 * all values are equal.
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 */
const partition = (nums, lo, hi) => {
  const pivot = lo + Math.floor((hi - lo) / 2);

  let i = lo;
  let j = hi;

  while (i <= j) {
    while (nums[i] < nums[pivot]) {
      i++;
    }

    while (nums[j] > nums[pivot]) {
      j--;
    }

    if (i <= j) {
      swap(nums, i++, j--);
    }
  }

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
  sort(nums, pivot, hi);
};

/**
 * Quick sort
 *
 * @param {number[]} nums
 */
const quickSort = nums => sort(nums, 0, nums.length - 1);

export default quickSort;
