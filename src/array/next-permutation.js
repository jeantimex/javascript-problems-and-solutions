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
  if (nums == null || nums.length == 0) {
    return;
  }

  const n = nums.length;

  // step 1. scan from right and find the digit that is lower than the one on its right
  let p = n - 1;
  while (p > 0 && nums[p - 1] >= nums[p]) {
    p--;
  }

  if (p == 0) {
    // no such digit is found, the whole array is sorted in descending order
    // we can simply reverse it
    reverse(nums, 0, n - 1);
    return;
  }

  // step 2. from p, find the digit that is just larger than nums[p - 1]
  let i = p - 1;
  let j = p;

  while (p < n) {
    if (nums[p] > nums[i] && nums[p] <= nums[j]) {
      j = p;
    }
    p++;
  }

  // step 3. swap i & j
  swap(nums, i, j);

  // step 4. reverse the digits after i
  reverse(nums, i + 1, n - 1);
};

const swap = (nums, i, j) => {
  const t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
};

const reverse = (nums, i, j) => {
  while (i < j) {
    swap(nums, i++, j--);
  }
};
