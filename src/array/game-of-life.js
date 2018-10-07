/**
 * Game of Life
 *
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life,
 * is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 *
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
 * Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the
 * following four rules (taken from the above Wikipedia article):
 *
 *   1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 *   2. Any live cell with two or three live neighbors lives on to the next generation.
 *   3. Any live cell with more than three live neighbors dies, as if by over-population..
 *   4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 *
 * Write a function to compute the next state (after one update) of the board given its current state.
 *
 * Follow up:
 *   1. Could you solve it in-place? Remember that the board needs to be updated at the same time:
 *      You cannot update some cells first and then use their updated values to update other cells.
 *
 *   2. In this question, we represent the board using a 2D array. In principle, the board is infinite,
 *      which would cause problems when the active area encroaches the border of the array. How would
 *      you address these problems?
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = board => {
  const m = board.length;
  const n = board[0].length;

  const di = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dj = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;

      for (let k = 0; k < 8; k++) {
        const ii = i + di[k];
        const jj = j + dj[k];

        if (ii < 0 || ii >= m || jj < 0 || jj >= n) {
          continue;
        }

        if (board[ii][jj] === 1 || board[ii][jj] === 2) {
          live++;
        }
      }

      if (board[i][j] === 1 && (live < 2 || live > 3)) {
        board[i][j] = 2;
      } else if (board[i][j] === 0 && live === 3) {
        board[i][j] = 3;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] %= 2;
    }
  }
};
