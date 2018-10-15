/**
 * Single Number II
 *
 * Given a non-empty array of integers, every element appears three times except for one,
 * which appears exactly once. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement it without using
 * extra memory?
 *
 * Example 1:
 *
 * Input: [2,2,3,2]
 * Output: 3
 * Example 2:
 *
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let ones = 0,
    twos = 0,
    threes = 0;

  for (let i = 0; i < nums.length; i++) {
    // twos holds the num that appears twice
    twos |= ones & nums[i];

    // ones holds the num that appears once
    ones ^= nums[i];

    // threes holds the num that appears three times
    threes = ones & twos;

    // if num[i] appears three times
    // doing this will clear ones and twos
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
};

export { singleNumber };
