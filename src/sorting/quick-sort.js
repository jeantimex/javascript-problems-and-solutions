/**
 * Quick Sort
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
const partitionLomuto = (nums, lo, hi) => {
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
const partitionHoare = (nums, lo, hi) => {
  const pivot = lo + Math.floor((hi - lo) / 2);

  let i = lo;
  let j = hi;

  while (i < j) {
    while (nums[i] < nums[pivot]) {
      i++;
    }

    while (nums[j] > nums[pivot]) {
      j--;
    }

    swap(nums, i++, j--);
  }

  return i;
};

/**
 * Quick sort helper - Returns sorted nums
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 * @parem {string} schema
 */
const sort = (nums, lo, hi, schema) => {
  if (lo >= hi) {
    return;
  }

  let pivot;

  if (schema === 'lomuto') {
    pivot = partitionLomuto(nums, lo, hi);
  } else {
    pivot = partitionHoare(nums, lo, hi);
  }

  sort(nums, lo, pivot - 1, schema);
  sort(nums, pivot, hi, schema);
};

/**
 * Quick sort
 *
 * @param {number[]} nums
 * @param {string} schema
 */
const quickSort = (nums, schema) => sort(nums, 0, nums.length - 1, schema);

export default quickSort;
