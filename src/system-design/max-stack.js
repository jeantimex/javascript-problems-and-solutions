/**
 * Max Stack
 *
 * The implementation is similar to Min Stack
 */

/**
 * initialize your data structure here.
 */
class MaxStack {
  constructor() {
    this.stack = [];
    this.max = null;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.max = x;
      return;
    }

    if (x > this.max) {
      // x - this.max > 0
      // 2x - this.max > x
      // 2x - this.max > new max
      this.stack.push(2 * x - this.max);
      this.max = x;
    } else {
      this.stack.push(x);
    }
  }

  /**
   * @return {number}
   */
  pop() {
    const x = this.stack.pop();

    if (x > this.max) {
      const result = this.max;
      this.max = 2 * this.max - x;
      return result;
    }

    if (this.stack.length === 0) {
      this.max = null;
    }

    return x;
  }

  /**
   * @return {number}
   */
  top() {
    const x = this.stack[this.stack.length - 1];

    if (x > this.max) {
      return this.max;
    }

    return x;
  }

  /**
   * @return {number}
   */
  getMax() {
    return this.max;
  }
}
