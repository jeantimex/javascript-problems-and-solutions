/**
 * Find K Closest Elements
 *
 * Given a sorted array, two integers k and x, find the k closest elements to x in the array.
 * The result should also be sorted in ascending order. If there is a tie, the smaller elements
 * are always preferred.
 *
 * Example 1:
 *
 * Input: [1,2,3,4,5], k=4, x=3
 * Output: [1,2,3,4]
 *
 * Example 2:
 *
 * Input: [1,2,3,4,5], k=4, x=-1
 * Output: [1,2,3,4]
 *
 * Note:
 *
 * The value k is positive and will always be smaller than the length of the sorted array.
 * Length of the given array is positive and will not exceed 104
 * Absolute value of elements in the array and x will not exceed 104
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
  const p = findClosestElement(arr, x);

  let i = p - 1; // Because we prefer smaller value if there is a tie
  let j = p;

  while (k-- > 0) {
    if (i < 0 || (j < arr.length && Math.abs(arr[j] - x) < Math.abs(arr[i] - x))) {
      // Here we use < instead of <=, beacuse we prefer smaller value if there is a tie
      j++;
    } else {
      i--;
    }
  }

  return arr.slice(i + 1, j);
};

const findClosestElement = (arr, x) => {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};

export { findClosestElements };
