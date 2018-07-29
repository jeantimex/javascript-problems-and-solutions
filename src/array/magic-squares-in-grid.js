/**
 * Magic Squares In Grid
 *
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that
 * each row, column, and both diagonals all have the same sum.
 *
 * Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).
 *
 * Example 1:
 *
 * Input: [[4,3,8,4],
 *         [9,5,1,9],
 *         [2,7,6,2]]
 * Output: 1
 *
 * Explanation:
 * The following subgrid is a 3 x 3 magic square:
 * 438
 * 951
 * 276
 *
 * while this one is not:
 * 384
 * 519
 * 762
 *
 * In total, there is only one magic square inside the given grid.
 *
 * Note:
 *
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * 0 <= grid[i][j] <= 15
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = grid => {
  const R = grid.length;
  const C = grid[0].length;

  let ans = 0;

  for (let r = 0; r < R - 2; ++r)
    for (let c = 0; c < C - 2; ++c) {
      if (grid[r + 1][c + 1] != 5) continue; // optional skip
      if (
        magic(
          grid[r][c],
          grid[r][c + 1],
          grid[r][c + 2],
          grid[r + 1][c],
          grid[r + 1][c + 1],
          grid[r + 1][c + 2],
          grid[r + 2][c],
          grid[r + 2][c + 1],
          grid[r + 2][c + 2]
        )
      )
        ans++;
    }

  return ans;
};

const isMagicSquare = (...vals) => {
  const count = Array(16).fill(0);

  for (let v of vals) count[v]++;

  for (let v = 1; v <= 9; ++v) {
    if (count[v] !== 1) return false;
  }

  return (
    vals[0] + vals[1] + vals[2] == 15 &&
    vals[3] + vals[4] + vals[5] == 15 &&
    vals[6] + vals[7] + vals[8] == 15 &&
    vals[0] + vals[3] + vals[6] == 15 &&
    vals[1] + vals[4] + vals[7] == 15 &&
    vals[2] + vals[5] + vals[8] == 15 &&
    vals[0] + vals[4] + vals[8] == 15 &&
    vals[2] + vals[4] + vals[6] == 15
  );
};

export { numMagicSquaresInside };
