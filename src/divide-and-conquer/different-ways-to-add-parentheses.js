/**
 * Different Ways to Add Parentheses
 *
 * Given a string of numbers and operators, return all possible results from
 * computing all the different possible ways to group numbers and operators.
 * The valid operators are +, - and *.
 *
 * Example 1:
 *
 * Input: "2-1-1"
 * Output: [0, 2]
 *
 * Explanation:
 * ((2-1)-1) = 0
 * (2-(1-1)) = 2
 *
 * Example 2:
 *
 * Input: "2*3-4*5"
 * Output: [-34, -14, -10, -10, 10]
 *
 * Explanation:
 * (2*(3-(4*5))) = -34
 * ((2*3)-(4*5)) = -14
 * ((2*(3-4))*5) = -10
 * (2*((3-4)*5)) = -10
 * (((2*3)-4)*5) = 10
 */

/**
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = input => {
  const result = [];

  for (let i = 1; i < input.length; i++) {
    const c = input[i];

    if (c === '+' || c === '-' || c === '*') {
      const s1 = input.substring(0, i);
      const s2 = input.substring(i + 1);

      const l1 = diffWaysToCompute(s1);
      const l2 = diffWaysToCompute(s2);

      for (let n1 of l1) {
        for (let n2 of l2) {
          switch (c) {
            case '+':
              result.push(n1 + n2);
              break;
            case '-':
              result.push(n1 - n2);
              break;
            case '*':
              result.push(n1 * n2);
              break;
          }
        }
      }
    }
  }

  if (result.length === 0) {
    result.push(parseInt(input));
  }

  return result;
};

export { diffWaysToCompute };
