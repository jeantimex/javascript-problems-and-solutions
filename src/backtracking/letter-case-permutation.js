/**
 * Letter Case Permutation
 *
 * Given a string S, we can transform every letter individually to be
 * lowercase or uppercase to create another string.  Return a list of all possible strings we could create.
 *
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 *
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 *
 * Input: S = "12345"
 * Output: ["12345"]
 * Note:
 *
 * S will be a string with length at most 12.
 * S will consist only of letters or digits.
 */

/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = S => {
  const result = [];
  backtracking(S, 0, '', result);
  return result;
};

const backtracking = (S, i, solution, result) => {
  if (i === S.length) {
    result.push(solution);
    return;
  }

  backtracking(S, i + 1, solution + S[i].toLowerCase(), result);

  if (/[a-zA-Z]/.test(S[i])) {
    backtracking(S, i + 1, solution + S[i].toUpperCase(), result);
  }
};

export { letterCasePermutation };
