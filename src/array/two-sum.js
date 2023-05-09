/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};

/**
 * Brute Force
 */

/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 
 */
const twoSumBrute = function (nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let nextIndex = i + 1; nextIndex < nums.length; nextIndex++) {
			if (target === nums[i] + nums[nextIndex]) {
				return [i, nextIndex];
			}
		}
	}
};

console.log(twoSumBrute([3, 2, 4], 6)); // [0,1]
 
export { twoSum };
