/**
 * Next Permutation
 *
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 *
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 *
 * The replacement must be in-place, do not allocate extra memory.
 *
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = nums => {
  const n = nums.length;

  // Step 1. scan from right and find the first digit that is less than its right
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      // Step 2. scan from right and find the digit that is larger than nums[i]
      for (let j = n - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          // Step 3. swap nums[i] and nums[j], reverse from i+1
          swap(nums, i, j);
          reverse(nums, i + 1, n - 1);
          return;
        }
      }
    }
  }

  nums.reverse();
};

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

const reverse = (nums, start, end) => {
  while (start < end) {
    swap(nums, start++, end--);
  }
};
