/**
 * Letter Combinations of A Phone Number
 *
 * Given a digit string, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * 0: ' '
 * 1: ''
 * 2: abc
 * 3: def
 * 4: ghi
 * 5: jkl
 * 6: mno
 * 7: pars
 * 8: tuv
 * 9: wxyz
 *
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

const keyboard = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (!digits) {
    return [];
  }

  const results = [];
  backtracking(digits, 0, '', results);
  return results;
};

const backtracking = (digits, start, solution, results) => {
  if (start === digits.length) {
    return results.push(solution);
  }

  const index = parseInt(digits[start]);
  const keys = keyboard[index];

  for (let i = 0; i < keys.length; i++) {
    backtracking(digits, start + 1, solution + keys[i], results);
  }
};

export default letterCombinations;
