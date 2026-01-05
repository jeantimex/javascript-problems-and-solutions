/**
 * Backspace String Compare
 *
 * Given two strings S and T, return if they are equal when both are typed into empty text editors.
 * # means a backspace character.
 *
 * Example 1:
 *
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 *
 * Example 2:
 *
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 *
 * Example 3:
 *
 * Input: S = "a##c", T = "#a#c"
 * Output: true
 * Explanation: Both S and T become "c".
 *
 * Example 4:
 *
 * Input: S = "a#c", T = "b"
 * Output: false
 * Explanation: S becomes "c" while T becomes "b".
 *
 * Note:
 *
 * - 1 <= S.length <= 200
 * - 1 <= T.length <= 200
 * - S and T only contain lowercase letters and '#' characters.
 *
 * Follow up:
 *
 * Can you solve it in O(N) time and O(1) space?
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  // While there may be chars in S or T
  for (let i = S.length - 1, j = T.length - 1, skipS = 0, skipT = 0; i >= 0 || j >= 0; i--, j--) {
    // Find position of next possible char in S
    while (i >= 0) {
      if (S[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }

    // Find position of next possible char in T
    while (j >= 0) {
      if (T[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }

    // If two actual characters are different
    if (i >= 0 && j >= 0 && S[i] != T[j]) {
      return false;
    }

    // If expecting to compare char vs nothing
    if (i >= 0 !== j >= 0) {
      return false;
    }
  }

  return true;
};

export { backspaceCompare };
