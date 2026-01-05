/**
 * Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 */
const binarySearch = (nums, target) => {
  if (nums.length === 0) {
    return -1;
  }

  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
};

export default binarySearch;
