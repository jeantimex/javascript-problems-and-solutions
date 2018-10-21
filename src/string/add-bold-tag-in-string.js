/**
 * Add Bold Tag in String
 *
 * Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b>
 * to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them
 * together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive,
 * you need to combine them.
 *
 * Example 1:
 * Input:
 * s = "abcxyz123"
 * dict = ["abc","123"]
 * Output:
 * "<b>abc</b>xyz<b>123</b>"
 *
 * Example 2:
 * Input:
 * s = "aaabbcc"
 * dict = ["aaa","aab","bc"]
 * Output:
 * "<b>aaabbc</b>c"
 *
 * Note:
 * The given dict won't contain duplicates, and its length won't exceed 100.
 * All the strings in input have length in range [1, 1000].
 */

/**
 * Solution II: Bold Boolean Array
 *
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTag = (s, dict) => {
  const n = s.length;
  const bold = Array(n).fill(false);

  for (let i = 0, end = 0; i < n; i++) {
    for (let word of dict) {
      if (s.startsWith(word, i)) {
        end = Math.max(end, i + word.length);
      }
    }
    bold[i] = end > i;
  }

  let result = '';
  for (let i = 0; i < n; ) {
    if (!bold[i]) {
      result += s[i++];
      continue;
    }

    let j = i;
    while (j < n && bold[j]) j++;
    result += '<b>' + s.substring(i, j) + '</b>';
    i = j;
  }

  return result.toString();
};

/**
 * Solution I: Merge Intervals
 *
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTagII = (s, dict) => {
  let intervals = [];

  // Step 1. Get the initial intervals
  for (let i = 0; i < s.length; i++) {
    let maxLength = 0;

    for (let j = 0; j < dict.length; j++) {
      if (s.substr(i).startsWith(dict[j])) {
        maxLength = Math.max(maxLength, dict[j].length);
      }
    }

    if (maxLength > 0) {
      intervals.push({
        start: i,
        end: i + maxLength - 1,
      });
    }
  }

  // Step 2. Merge intervals
  intervals = mergeIntervals(intervals);

  // Step 3. Add <b></b> tags
  const arr = s.split('');
  intervals.forEach(({ start, end }) => {
    arr[start] = `<b>${arr[start]}`;
    arr[end] = `${arr[end]}</b>`;
  });
  return arr.join('');
};

const mergeIntervals = intervals => {
  let i = 0;

  for (let j = 0; j < intervals.length; j++) {
    const current = intervals[i];
    const next = intervals[j];

    if (next.start <= current.end + 1) {
      current.end = Math.max(current.end, next.end);
    } else {
      intervals[++i] = next;
    }
  }

  return intervals.slice(0, i + 1);
};

export default addBoldTag;
