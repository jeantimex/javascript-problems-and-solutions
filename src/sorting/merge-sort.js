/**
 * Merge Sort
 */

/**
 * Merge [lo...mid] and [mid + 1...hi]
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} mid
 * @param {number} hi
 */
const merge = (nums, lo, mid, hi) => {
  let i = lo;
  let j = mid + 1;
  let k = lo;

  const copy = nums.slice();

  while (i <= mid && j <= hi) {
    if (copy[i] < copy[j]) {
      nums[k++] = copy[i++];
    } else {
      nums[k++] = copy[j++];
    }
  }

  while (i <= mid) {
    nums[k++] = copy[i++];
  }

  while (j <= hi) {
    nums[k++] = copy[j++];
  }
};

/**
 * Merge sort helper
 *
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 */
const sort = (nums, lo, hi) => {
  if (lo >= hi) {
    return;
  }

  const mid = lo + Math.floor((hi - lo) / 2);

  sort(nums, lo, mid);
  sort(nums, mid + 1, hi);
  merge(nums, lo, mid, hi);
};

/**
 * Merge Sort
 *
 * @param {number[]} nums
 */
const mergeSort = nums => sort(nums, 0, nums.length - 1);

export default mergeSort;
