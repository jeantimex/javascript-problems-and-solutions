/**
 * Sort Characters By Frequency
 *
 * Given a string, sort it in decreasing order based on the frequency of characters.
 *
 * Example 1:
 *
 * Input:
 * "tree"
 *
 * Output:
 * "eert"
 *
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 * Example 2:
 *
 * Input:
 * "cccaaa"
 *
 * Output:
 * "cccaaa"
 *
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 * Example 3:
 *
 * Input:
 * "Aabb"
 *
 * Output:
 * "bbAa"
 *
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * Bucket Sort O(n)
 *
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
  // Step 1. count character frequency
  const map = {};
  for (let c of s) {
    map[c] = ~~map[c] + 1;
  }

  // Step 2. build the bucket
  const bucket = Array(s.length + 1).fill('');
  Object.keys(map).forEach(c => {
    const count = map[c];
    bucket[count] += c.repeat(count);
  });

  // Step 3. build the result
  let result = '';
  for (let i = bucket.length - 1; i > 0; i--) {
    result += bucket[i];
  }
  return result;
};

export { frequencySort };
