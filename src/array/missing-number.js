/**
 * Missing Number
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 *
 * Example 1:
 *
 * Input: [3,0,1]
 * Output: 2
 * Example 2:
 *
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space
 * complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  let res = nums.length;

  for (i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i]; // a ^ b ^ b = a
  }

  return res;
};

export { missingNumber };
