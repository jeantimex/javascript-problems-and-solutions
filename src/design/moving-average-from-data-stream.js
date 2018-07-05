/**
 * Moving Average from Data Stream
 *
 * Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
 *
 * For example,
 * MovingAverage m = new MovingAverage(3);
 * m.next(1) = 1
 * m.next(10) = (1 + 10) / 2
 * m.next(3) = (1 + 10 + 3) / 3
 * m.next(5) = (10 + 3 + 5) / 3
 */

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
  constructor(size) {
    this.window = Array(size).fill(0);
    this.ptr = 0;
    this.sum = 0;
    this.count = 0;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  next(val) {
    if (this.count < this.window.length) {
      this.count++;
    }

    this.sum += val - this.window[this.ptr];
    this.window[this.ptr] = val;
    this.ptr = (this.ptr + 1) % this.window.length;

    return this.sum / this.count;
  }
}

export { MovingAverage };
