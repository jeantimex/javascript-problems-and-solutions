/**
 * Missing Ranges
 *
 * Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper],
 * return its missing ranges.
 *
 * Example:
 *
 * Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
 * Output: ["2", "4->49", "51->74", "76->99"]
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = (nums, lower, upper) => {
  const res = [];

  // the next number we need to find
  let next = lower;

  for (let i = 0; i < nums.length; i++) {
    // not within the range yet
    if (nums[i] < next) continue;

    // continue to find the next one
    if (nums[i] === next) {
      next++;
      continue;
    }

    // get the missing range string format
    res.push(getRange(next, nums[i] - 1));

    // now we need to find the next number
    next = nums[i] + 1;
  }

  // do a final check
  if (next <= upper) {
    res.push(getRange(next, upper));
  }

  return res;
};

const getRange = (n1, n2) => (n1 === n2 ? `${n1}` : `${n1}->${n2}`);

export { findMissingRanges };
