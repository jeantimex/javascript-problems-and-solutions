/**
 * Surrounded Regions
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 *
 * Example:
 *
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * After running your function, the board should be:
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * Explanation:
 *
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are
 * not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border
 * will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
 */

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = board => {
  if (!board || board.length === 0 || board[0].length === 0) return;

  const n = board.length;
  const m = board[0].length;

  // scan the borders and mark the 'O's to '1'
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((i === 0 || i === n - 1 || j === 0 || j === m - 1) && board[i][j] === 'O') {
        bfs(board, n, m, i, j);
      }
    }
  }

  // scan the inner area and mark the 'O's to 'X'
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }

  // reset all the '1's to 'O's
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === '1') {
        board[i][j] = 'O';
      }
    }
  }
};

const bfs = (board, n, m, i, j) => {
  const queue = [];
  queue.push([i, j]);

  board[i][j] = '1';

  while (queue.length > 0) {
    const pos = queue.shift();

    for (let k = 0; k < 4; k++) {
      i = pos[0] + dx[k];
      j = pos[1] + dy[k];

      if (i >= 0 && i < n && j >= 0 && j < m && board[i][j] === 'O') {
        board[i][j] = '1';
        queue.push([i, j]);
      }
    }
  }
};

export { solve };
