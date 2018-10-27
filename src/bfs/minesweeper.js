/**
 * Minesweeper
 *
 * You are given a 2D char matrix representing the game board.
 * 'M' represents an unrevealed mine,
 * 'E' represents an unrevealed empty square,
 * 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines,
 * digit ('1' to '8') represents how many mines are adjacent to this revealed square,
 * 'X' represents a revealed mine.
 *
 * Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'),
 * return the board after revealing this position according to the following rules:
 *
 * - If a mine ('M') is revealed, then the game is over - change it to 'X'.
 * - If an empty square ('E') with no adjacent mines is revealed,
 *   then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
 * - If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8')
 *   representing the number of adjacent mines.
 *
 * Return the board when no more squares will be revealed.
 *
 * Example 1:
 * Input:
 *
 * [['E', 'E', 'E', 'E', 'E'],
 *  ['E', 'E', 'M', 'E', 'E'],
 *  ['E', 'E', 'E', 'E', 'E'],
 *  ['E', 'E', 'E', 'E', 'E']]
 *
 * Click : [3,0]
 *
 * Output:
 *
 * [['B', '1', 'E', '1', 'B'],
 *  ['B', '1', 'M', '1', 'B'],
 *  ['B', '1', '1', '1', 'B'],
 *  ['B', 'B', 'B', 'B', 'B']]
 *
 * Example 2:
 * Input:
 *
 * [['B', '1', 'E', '1', 'B'],
 *  ['B', '1', 'M', '1', 'B'],
 *  ['B', '1', '1', '1', 'B'],
 *  ['B', 'B', 'B', 'B', 'B']]
 *
 * Click : [1,2]
 *
 * Output:
 *
 * [['B', '1', 'E', '1', 'B'],
 *  ['B', '1', 'X', '1', 'B'],
 *  ['B', '1', '1', '1', 'B'],
 *  ['B', 'B', 'B', 'B', 'B']]
 *
 * Note:
 * - The range of the input matrix's height and width is [1,50].
 * - The click position will only be an unrevealed square ('M' or 'E'),
 *   which also means the input board contains at least one clickable square.
 * - The input board won't be a stage when game is over (some mines have been revealed).
 * - For simplicity, not mentioned rules should be ignored in this problem. For example,
 *   you don't need to reveal all the unrevealed mines when the game is over,
 *   consider any cases that you will win the game or flag any squares.
 */

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = (board, click) => {
  const [x, y] = click;

  if (board[x][y] === 'M') {
    // If a mine ('M') is revealed, then the game is over - change it to 'X'
    board[x][y] = 'X';
  } else {
    bfs(board, click);
  }

  return board;
};

const bfs = (board, click) => {
  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  const m = board.length;
  const n = board[0].length;
  const queue = [click];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    // Count the adjacent mines
    let minesCount = 0;
    for (let [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;

      if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'M') {
        minesCount++;
      }
    }

    if (minesCount > 0) {
      // If an empty square ('E') with at least one adjacent mine is revealed,
      // then change it to a digit ('1' to '8') representing the number of adjacent mines.
      board[x][y] = '' + minesCount;
    } else {
      // If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B')
      // and all of its adjacent unrevealed squares should be revealed recursively.
      board[x][y] = 'B';

      for (let [dx, dy] of dirs) {
        const i = x + dx;
        const j = y + dy;

        if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'E') {
          queue.push([i, j]);
          board[i][j] = 'B';
        }
      }
    }
  }
};

export { updateBoard };
