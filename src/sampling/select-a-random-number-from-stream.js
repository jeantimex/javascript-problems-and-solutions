/**
 * Select a random number from stream, with O(1) space
 *
 * Given a stream of numbers, generate a random number from the stream.
 * You are allowed to use only O(1) space and the input is in the form of stream,
 * so can’t store the previously seen numbers.
 */

/**
 * Your Solution will be called like this:
 * var sol = new Solution();
 * var stream = [1, 2, 3, 4];
 * for (let i = 0; i < stream.length; i++) {
 *   console.log("Random number from first " + (i+1) +
 *     " numbers is " + sol.selectRandom(stream[i]));
 * }
 */

import { randomInt } from 'utils/random';

class Solution {
  constructor() {
    this.res = null;
    this.count = 0;
  }

  /**
   * @param {number} num
   */
  selectRandom(num) {
    this.count++; // increment count of numbers seen so far

    // If this is the first element from stream, return it
    if (this.count == 1) {
      this.res = num;
    } else {
      // Generate a random number from 0 to count - 1
      const i = randomInt(0, count);

      // Replace the prev random number with new number with 1/count probability
      if (i === count - 1) {
        res = num;
      }
    }

    return res;
  }
}

export { Solution };
