/**
 * Range Addition
 *
 * Assume you have an array of length n initialized with all 0's and are given k update operations.
 *
 * Each operation is represented as a triplet: [startIndex, endIndex, inc]
 * which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.
 *
 * Return the modified array after all k operations were executed.
 *
 * Example:
 *
 * Given:
 *
 *     length = 5,
 *     updates = [
 *         [1,  3,  2],
 *         [2,  4,  3],
 *         [0,  2, -2]
 *     ]
 *
 * Output:
 *
 *     [-2, 0, 3, 5, 3]
 * Explanation:
 *
 * Initial state:
 * [ 0, 0, 0, 0, 0 ]
 *
 * After applying operation [1, 3, 2]:
 * [ 0, 2, 2, 2, 0 ]
 *
 * After applying operation [2, 4, 3]:
 * [ 0, 2, 5, 5, 3 ]
 *
 * After applying operation [0, 2, -2]:
 * [-2, 0, 3, 5, 3 ]
 */

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
const getModifiedArray = (length, updates) => {
  const result = Array(length).fill(0);

  for (let [start, end, val] of updates) {
    result[start] += val;

    if (end + 1 < length) {
      result[end + 1] -= val;
    }
  }

  for (let i = 1; i < length; i++) {
    result[i] += result[i - 1];
  }

  return result;
};

export { getModifiedArray };
