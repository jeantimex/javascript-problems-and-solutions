/**
 * Design Phone Directory
 *
 * Design a Phone Directory which supports the following operations:
 *
 * get: Provide a number which is not assigned to anyone.
 * check: Check if a number is available or not.
 * release: Recycle or release a number.
 * Example:
 *
 * // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
 * PhoneDirectory directory = new PhoneDirectory(3);
 *
 * // It can return any available phone number. Here we assume it returns 0.
 * directory.get();
 *
 * // Assume it returns 1.
 * directory.get();
 *
 * // The number 2 is available, so return true.
 * directory.check(2);
 *
 * // It returns 2, the only number that is left.
 * directory.get();
 *
 * // The number 2 is no longer available, so return false.
 * directory.check(2);
 *
 * // Release number 2 back to the pool.
 * directory.release(2);
 *
 * // Number 2 is available again, return true.
 * directory.check(2);
 */

class PhoneDirectory {
  /**
   * Initialize your data structure here
          @param maxNumbers - The maximum numbers that can be stored in the phone directory.
   * @param {number} maxNumbers
   */
  constructor(maxNumbers) {
    this.pos = 0;
    this.nums = [];
    for (let i = 0; i < maxNumbers; i++) {
      this.nums[i] = (i + 1) % maxNumbers;
    }
  }

  /**
   * Provide a number which is not assigned to anyone.
          @return - Return an available number. Return -1 if none is available.
   * @return {number}
   */
  get() {
    if (this.nums[this.pos] === -1) {
      return -1;
    }

    const res = this.pos;
    this.pos = this.nums[res];
    this.nums[res] = -1;
    return res;
  }

  /**
   * Check if a number is available or not.
   * @param {number} number
   * @return {boolean}
   */
  check(number) {
    return this.nums[number] !== -1;
  }

  /**
   * Recycle or release a number.
   * @param {number} number
   * @return {void}
   */
  release(number) {
    if (this.nums[number] !== -1) {
      return;
    }
    this.nums[number] = this.pos;
    this.pos = number;
  }
}

export { PhoneDirectory };
