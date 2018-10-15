/**
 * Find Case Combination of a String
 */

/**
 * @param {string} text
 * @return {number}
 */
const findCaseCombination = text => {
  const backtracking = (text, index, solution, result) => {
    if (index === text.length) {
      return result.push(solution);
    }

    backtracking(text, index + 1, solution + text[index].toLowerCase(), result);
    backtracking(text, index + 1, solution + text[index].toUpperCase(), result);
  };

  const result = [];
  backtracking(text, 0, '', result);
  return result.length;
};

export { findCaseCombination };
