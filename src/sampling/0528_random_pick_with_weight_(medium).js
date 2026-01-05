/**
 * Random Pick with Weight
 *
 * Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which
 * randomly picks an index in proportion to its weight.
 *
 * Note:
 *
 * 1 <= w.length <= 10000
 * 1 <= w[i] <= 10^5
 * pickIndex will be called at most 10000 times.
 *
 * Example 1:
 *
 * Input:
 * ["Solution","pickIndex"]
 * [[[1]],[]]
 * Output: [null,0]
 *
 * Example 2:
 *
 * Input:
 * ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
 * [[[1,3]],[],[],[],[],[]]
 * Output: [null,0,1,1,1,0]
 * Explanation of Input Syntax:
 *
 * The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the
 * array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.
 */

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Solution {
  /**
   * @param {number[]} w
   */
  constructor(w) {
    for (let i = 1; i < w.length; i++) {
      w[i] += w[i - 1];
    }
    this.wSums = w;
  }

  /**
   * @return {number}
   */
  pickIndex() {
    const n = this.wSums.length;
    const idx = getRandomInt(1, this.wSums[n - 1]);

    let lo = 0;
    let hi = n - 1;

    // Search position
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);

      if (this.wSums[mid] === idx) {
        return mid;
      } else if (this.wSums[mid] < idx) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  }
}

export { Solution };
