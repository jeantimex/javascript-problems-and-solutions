/**
 * Product of Array Except Self
 *
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * Example:
 *
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * Note: Please solve it without division and in O(n).
 *
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of
 * space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const n = nums.length;
  const res = Array(n).fill(0);

  // Scan from left to right
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  // Scan from right to left
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};

export { productExceptSelf };
