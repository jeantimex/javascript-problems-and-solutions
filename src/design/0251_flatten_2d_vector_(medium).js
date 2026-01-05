/**
 * Flatten 2D Vector
 *
 * Implement an iterator to flatten a 2d vector.
 *
 * Example:
 *
 * Input: 2d vector =
 * [
 *   [1,2],
 *   [3],
 *   [4,5,6]
 * ]
 * Output: [1,2,3,4,5,6]
 * Explanation: By calling next repeatedly until hasNext returns false,
 *              the order of elements returned by next should be: [1,2,3,4,5,6].
 */

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
class Vector2D {
  constructor(vec2d) {
    this.it = vec2d[Symbol.iterator]();
    this.shift = 0;
    this.row = this.it.next();
  }

  /**
   * @this Vector2D
   * @returns {boolean}
   */
  hasNext() {
    while (this.row.done === false && this.shift === this.row.value.length) {
      this.row = this.it.next();
      this.shift = 0;
    }
    return this.row.done === false;
  }

  /**
   * @this Vector2D
   * @returns {integer}
   */
  next() {
    return this.row.value[this.shift++];
  }
}

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

export { Vector2D };
