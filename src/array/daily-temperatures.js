/**
 * Daily Temperatures
 *
 * Given a list of daily temperatures, produce a list that, for each day in the input,
 * tells you how many days you would have to wait until a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 *
 * For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73],
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 *
 * Note: The length of temperatures will be in the range [1, 30000].
 * Each temperature will be an integer in the range [30, 100].
 *
 * The key of solving this problem is to maintain a Decreasing Stack of the indexes
 * of the temperatures, so that whenever we meet a higer temperature, that must be
 * the first time we see it.
 */

Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length - 1];
  },
});

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temperatures => {
  const n = temperatures.length;
  const result = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack.last]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  return result;
};
