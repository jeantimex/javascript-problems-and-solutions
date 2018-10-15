/**
 * Pascal's Triangle
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 *
 * Example:
 *
 * Input: 5
 * Output:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  const res = [];

  for (let i = 0; i < numRows; i++) {
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(res[i - 1][j - 1] + res[i - 1][j]);
    }

    if (i > 0) row.push(1);

    res.push(row);
  }

  return res;
};

export { generate };
