/**
 * Longest Consecutive Sequence
 *
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 *
 * For example,
 * Given [100, 4, 200, 1, 3, 2],
 * The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
 *
 * Your algorithm should run in O(n) complexity.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
  let max = 0;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let count = 1;

    // look left
    let num = nums[i];
    while (set.has(--num)) {
      count++;
      set.delete(num);
    }

    // look right
    num = nums[i];
    while (set.has(++num)) {
      count++;
      set.delete(num);
    }

    max = Math.max(max, count);
  }

  return max;
};
