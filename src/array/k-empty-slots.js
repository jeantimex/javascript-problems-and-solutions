/**
 * K Empty Slots
 *
 * There is a garden with N slots. In each slot, there is a flower.
 * The N flowers will bloom one by one in N days.
 * In each day, there will be exactly one flower blooming and it will be in the status of blooming since then.
 *
 * Given an array flowers consists of number from 1 to N.
 * Each number in the array represents the place where the flower will open in that day.
 *
 * For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x,
 * where i and x will be in the range from 1 to N.
 *
 * Also given an integer k, you need to output in which day there exists two flowers in the status of blooming,
 * and also the number of flowers between them is k and these flowers are not blooming.
 *
 * If there isn't such day, output -1.
 *
 * Example 1:
 * Input:
 * flowers: [1,3,2]
 * k: 1
 * Output: 2
 * Explanation: In the second day, the first and the third flower have become blooming.
 *
 * Example 2:
 * Input:
 * flowers: [1,2,3]
 * k: 1
 * Output: -1
 *
 * Note:
 * The given array will be in the range [1, 20000].
 */

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
const kEmptySlots = (flowers, k) => {
  const n = flowers.length;
  const window = [];
  const days = [];

  for (let i = 0; i < n; i++) {
    days[flowers[i] - 1] = i + 1;
  }

  let result = n;

  for (let i = 0; i < n; i++) {
    // Step 1. Remove the old item from window
    if (window.length > 0 && window[0] === i - k) {
      window.shift();
    }

    // Step 2. Try to pop the larger/smaller items
    while (window.length > 0 && days[i] < days[window[window.length - 1]]) {
      window.pop();
    }

    // Step 3. Push the new item, now window[0] holds the smallest/largest item
    window.push(i);

    // Step 4. Check the minimum day in the window with the left and right borders
    if (i < k || i === n - 1) {
      continue;
    }

    if (k === 0 || (days[i - k] < days[window[0]] && days[i + 1] < days[window[0]])) {
      result = Math.min(result, Math.max(days[i - k], days[i + 1]));
    }
  }

  return result < n ? result : -1;
};

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
const kEmptySlotsII = (flowers, k) => {
  const n = flowers.length;
  const window = new MinQueue();
  const days = [];

  for (let i = 0; i < n; i++) {
    days[flowers[i] - 1] = i + 1;
  }

  let result = n;

  for (let i = 0; i < n; i++) {
    window.push(days[i]);

    if (k <= i && i < n - 1) {
      window.shift();

      if (k == 0 || (days[i - k] < window.min() && days[i + 1] < window.min())) {
        result = Math.min(result, Math.max(days[i - k], days[i + 1]));
      }
    }
  }

  return result < n ? result : -1;
};

class MinQueue extends Array {
  constructor() {
    super();
    this.mins = [];
  }

  push(x) {
    super.push(x);

    while (this.mins.length > 0 && x < this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }

    this.mins.push(x);
  }

  shift() {
    const x = super.shift();

    if (x == this.mins[0]) {
      this.mins.shift();
    }

    return x;
  }

  min() {
    return this.mins[0];
  }
}

export { kEmptySlots, kEmptySlotsII };
