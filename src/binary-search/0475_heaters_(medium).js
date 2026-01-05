/**
 * Heaters
 *
 * Winter is coming! Your first job during the contest is to design a standard heater
 * with fixed warm radius to warm all the houses.
 *
 * Now, you are given positions of houses and heaters on a horizontal line,
 * find out minimum radius of heaters so that all houses could be covered by those heaters.
 *
 * So, your input will be the positions of houses and heaters seperately,
 * and your expected output will be the minimum radius standard of heaters.
 *
 * Note:
 * 1. Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
 * 2. Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
 * 3. As long as a house is in the heaters' warm radius range, it can be warmed.
 * 4. All the heaters follow your radius standard and the warm radius will the same.
 *
 * Example 1:
 *
 * Input: [1,2,3],[2]
 * Output: 1
 *
 * Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard,
 * then all the houses can be warmed.
 *
 * Example 2:
 *
 * Input: [1,2,3,4],[1,4]
 * Output: 1
 *
 * Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard,
 * then all the houses  * can be warmed.
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 *
 * Time complexity: max(O(nlogn), O(mlogn)) - m is the length of houses, n is the length of heaters.
 */
const findRadius = (houses, heaters) => {
  heaters.sort((a, b) => a - b);

  let result = -Infinity;

  for (let house of houses) {
    let index = searchInsert(heaters, house);

    const dist1 = index > 0 ? house - heaters[index - 1] : Infinity;
    const dist2 = index < heaters.length ? heaters[index] - house : Infinity;

    result = Math.max(result, Math.min(dist1, dist2));
  }

  return result;
};

const searchInsert = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};

export { findRadius };
