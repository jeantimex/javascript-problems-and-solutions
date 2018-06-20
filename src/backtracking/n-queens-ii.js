/**
 * N-Queens II
 *
 * Follow up for N-Queens problem.
 *
 * Now, instead outputting board configurations, return the total number of distinct solutions.
 */

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = n => {
  const isValid = (row, columns) => {
    for (let i = 0; i < row; i++) {
      if (columns[i] === columns[row]) {
        return false; // Two queues are in the same column
      }

      if (row - i === Math.abs(columns[row] - columns[i])) {
        return false; // Two queues are in the same diagonal
      }
    }

    return true;
  };

  const backtracking = (n, row, columns) => {
    if (row === n) {
      count++;
      return;
    }

    for (let j = 0; j < n; j++) {
      columns[row] = j;

      if (isValid(row, columns)) {
        backtracking(n, row + 1, columns);
      }
    }
  };

  let count = 0;
  backtracking(n, 0, []);
  return count;
};

export default totalNQueens;
