/**
 * Candy
 *
 * There are N children standing in a line. Each child is assigned a rating value.
 *
 * You are giving candies to these children subjected to the following requirements:
 *
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * What is the minimum candies you must give?
 *
 * Example 1:
 *
 * Input: [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 *
 * Example 2:
 *
 * Input: [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 *              The third child gets 1 candy because it satisfies the above two conditions.
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = ratings => {
  if (!ratings || ratings.length === 0) return 0;

  const n = ratings.length;

  // arr[i] stores the num of candies of i-th kid
  const arr = Array(n).fill(0);
  arr[0] = 1;

  // scan from left to right
  for (let i = 1; i < n; i++) {
    arr[i] = ratings[i] > ratings[i - 1] ? arr[i - 1] + 1 : 1;
  }

  // scan from right to left
  let sum = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      arr[i] = Math.max(arr[i], arr[i + 1] + 1);
    }

    sum += arr[i];
  }

  return sum;
};

export { candy };
