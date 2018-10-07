/**
 * Summary Ranges
 *
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 *
 * Example 1:
 * Input: [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 *
 * Example 2:
 * Input: [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 */

/**
 * Format the range
 *
 * @param {number} num1
 * @param {number} num2
 */
const getRange = (num1, num2) => (num1 === num2 ? `${num1}` : `${num1}->${num2}`);

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
  const n = nums.length;
  const result = [];

  for (let i = 0, j = 1; j <= n; j++) {
    if (j === n || nums[j] - nums[j - 1] > 1) {
      // found a range
      result.push(getRange(nums[i], nums[j - 1]));
      i = j;
    }
  }

  return result;
};

export { summaryRanges };
