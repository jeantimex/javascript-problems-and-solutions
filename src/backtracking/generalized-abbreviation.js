/**
 * Generalized Abbreviation
 *
 * Write a function to generate the generalized abbreviations of a word.
 *
 * Note: The order of the output does not matter.
 *
 * Example:
 *
 * Input: "word"
 * Output:
 * ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
 */

/**
 * @param {string} word
 * @return {string[]}
 */
const generateAbbreviations = word => {
  const result = [];
  backtracking(word, 0, 0, '', result);
  return result;
};

const backtracking = (word, index, count, solution, result) => {
  if (index === word.length) {
    if (count > 0) {
      solution += count;
    }
    result.push(solution);
    return;
  }
  
  // solution | count | word[index]
  // -------- |  10   | I

  // Case 1. Continue to use number to replace the character
  backtracking(word, index + 1, count + 1, solution, result);
  // Case 2. Stop using number to replace the character
  backtracking(word, index + 1, 0, solution + (count > 0 ? count : '') + word[index], result);
};

export { generateAbbreviations };
