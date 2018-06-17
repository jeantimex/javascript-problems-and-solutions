/**
 * Next Closest Time
 *
 * Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits.
 * There is no limit on how many times a digit can be reused.
 *
 * You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.
 *
 * Example 1:
 *
 * Input: "19:34"
 * Output: "19:39"
 *
 * Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
 *
 * It is not 19:33, because this occurs 23 hours and 59 minutes later.
 *
 * Example 2:
 *
 * Input: "23:59"
 * Output: "22:22"
 *
 * Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
 *
 * It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
 */

/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = time => {
  const set = new Set();
  [0, 1, 3, 4].map(d => set.add(parseInt(time.substr(d, 1))));

  if (set.size === 1) {
    return time;
  }

  const digits = Array.from(set);
  const target = parseInt(time.substr(0, 2)) * 60 + parseInt(time.substr(3, 2));

  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = '';

  const dfs = (digits, solution, index, target) => {
    if (index === 4) {
      const minutes = parseInt(solution.substr(0, 2)) * 60 + parseInt(solution.substr(2, 2));

      if (minutes !== target) {
        const diff = minutes > target ? minutes - target : 1440 + minutes - target;

        if (diff < minDiff) {
          minDiff = diff;
          result = solution.substr(0, 2) + ':' + solution.substr(2, 2);
        }
      }

      return;
    }

    for (let digit of digits) {
      if (index === 0 && digit > 2) continue;
      if (index === 1 && parseInt(solution[0]) * 10 + digit > 23) continue;
      if (index === 2 && digit > 5) continue;
      if (index === 3 && parseInt(solution[2]) * 10 + digit > 59) continue;

      dfs(digits, solution + digit, index + 1, target);
    }
  };

  dfs(digits, '', 0, target);

  return result;
};
