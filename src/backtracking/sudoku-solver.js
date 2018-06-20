/**
 * Sudoku Solver
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * Empty cells are indicated by the character '.'.
 *
 * You may assume that there will be only one unique solution.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = board => {
  solve(board, 0, 0);
};

/**
 * @param {character[][]} board
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
const solve = (board, row, col) => {
  if (row === 9) {
    return true;
  }

  if (col === 9) {
    return solve(board, row + 1, 0);
  }

  if (board[row][col] !== '.') {
    return solve(board, row, col + 1);
  }

  for (let n = 1; n <= 9; n++) {
    board[row][col] = `${n}`;

    if (isValid(board, row, col)) {
      if (solve(board, row, col + 1)) {
        return true;
      }
    }

    board[row][col] = '.';
  }

  return false;
};

/**
 * @param {character[][]} board
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
const isValid = (board, row, col) => {
  // Check current column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === board[row][col] && i !== row) {
      return false;
    }
  }

  // Check current row
  for (let j = 0; j < 9; j++) {
    if (board[row][j] === board[row][col] && j !== col) {
      return false;
    }
  }

  // Check current 3x3 grid
  let si = Math.floor(row / 3) * 3;
  let sj = Math.floor(col / 3) * 3;

  for (let i = si; i < si + 3; i++) {
    for (let j = sj; j < sj + 3; j++) {
      if (board[i][j] === board[row][col] && i !== row && j !== col) {
        return false;
      }
    }
  }

  return true;
};

export default solveSudoku;
