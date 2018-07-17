/**
 * Bold Words in String
 *
 * Given a set of keywords words and a string S, make all appearances of all keywords in S bold.
 * Any letters between <b> and </b> tags become bold.
 *
 * The returned string should use the least number of tags possible, and of course the tags should form a valid combination.
 *
 * For example, given that words = ["ab", "bc"] and S = "aabcd", we should return "a<b>abc</b>d".
 * Note that returning "a<b>a<b>b</b>c</b>d" would use more tags, so it is incorrect.
 *
 * Note:
 *
 * - words has length in range [0, 50].
 * - words[i] has length in range [1, 10].
 * - S has length in range [0, 500].
 * - All characters in words[i] and S are lowercase letters.
 */

/**
 * HashSet Solution
 *
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords = (words, S) => {
  // Step 1. Record all the bold positions
  const bold = new Set();

  for (let word of words) {
    for (let i = 0; i < S.length; i++) {
      if (S.substring(i, i + word.length) === word) {
        for (let j = i; j < i + word.length; j++) {
          bold.add(j);
        }
      }
    }
  }

  // Step 2. Reconstruct the string
  let res = '';
  for (let i = 0; i < S.length; i++) {
    if (bold.has(i) && !bold.has(i - 1)) res += '<b>';
    res += S[i];
    if (bold.has(i) && !bold.has(i + 1)) res += '</b>';
  }

  return res;
};

/**
 * Merge Intervals Solution
 *
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords_II = (words, S) => {
  let intervals = [];

  // Step 1. Get all the intervals
  for (let word of words) {
    for (let i = 0; i < S.length; i++) {
      if (S.substring(i, i + word.length) === word) {
        intervals.push([i, i + word.length - 1]);
      }
    }
  }

  // Step 2. Merge all the intervals
  intervals = mergeIntervals(intervals);

  // Step 3. Add <b></b> tags
  const arr = S.split('');
  for (let interval of intervals) {
    arr[interval[0]] = '<b>' + arr[interval[0]];
    arr[interval[1]] = arr[interval[1]] + '</b>';
  }
  return arr.join('');
};

const mergeIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 1;

  for (let j = 1; j < intervals.length; j++) {
    let prev = intervals[i];
    let curr = intervals[j];

    if (prev[1] + 1 < curr[0]) {
      intervals[++i] = intervals[j];
    } else {
      prev[1] = Math.max(prev[1], curr[1]);
    }
  }

  return intervals.slice(0, i + 1);
};

export { boldWords, boldWords_II };
