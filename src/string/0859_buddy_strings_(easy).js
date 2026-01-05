/**
 * Buddy Strings
 *
 * Given two strings A and B of lowercase letters, return true if and only if we can
 * swap two letters in A so that the result equals B.
 *
 * Example 1:
 * Input: A = "ab", B = "ba"
 * Output: true
 *
 * Example 2:
 * Input: A = "ab", B = "ab"
 * Output: false
 *
 * Example 3:
 * Input: A = "aa", B = "aa"
 * Output: true
 *
 * Example 4:
 * Input: A = "aaaaaaabc", B = "aaaaaaacb"
 * Output: true
 *
 * Example 5:
 * Input: A = "", B = "aa"
 * Output: false
 *
 * Note:
 *
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A and B consist only of lowercase letters.
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = (A, B) => {
  if (!A || !B || A.length !== B.length) {
    return false;
  }

  if (A === B) {
    const count = {};

    for (let c of A) {
      count[c] = ~~count[c] + 1;
    }

    for (let c in count) {
      if (count[c] > 1) {
        return true;
      }
    }

    return false;
  }

  let first = -1;
  let second = -1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        return false;
      }
    }
  }

  return second !== -1 && A[first] === B[second] && A[second] === B[first];
};

export { buddyStrings };
