/**
 * Valid Tic-Tac-Toe State
 *
 * A Tic-Tac-Toe board is given as a string array board.
 * Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.
 *
 * The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.
 *
 * Here are the rules of Tic-Tac-Toe:
 *
 * Players take turns placing characters into empty squares (" ").
 * The first player always places "X" characters, while the second player always places "O" characters.
 * "X" and "O" characters are always placed into empty squares, never filled ones.
 * The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
 * The game also ends if all squares are non-empty.
 * No more moves can be played if the game is over.
 *
 * Example 1:
 *
 * Input: board = ["O  ", "   ", "   "]
 * Output: false
 *
 * Explanation: The first player always plays "X".
 *
 * Example 2:
 *
 * Input: board = ["XOX", " X ", "   "]
 * Output: false
 *
 * Explanation: Players take turns making moves.
 *
 * Example 3:
 *
 * Input: board = ["XXX", "   ", "OOO"]
 * Output: false
 *
 * Example 4:
 *
 * Input: board = ["XOX", "O O", "XOX"]
 * Output: true
 *
 * Note:
 *
 * - board is a length-3 array of strings, where each string board[i] has length 3.
 * - Each board[i][j] is a character in the set {" ", "X", "O"}.
 */

/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = board => {
  let xCount = 0;
  let oCount = 0;

  for (let row of board) {
    for (let c of row) {
      if (c === 'X') xCount++;
      if (c === 'O') oCount++;
    }
  }

  if (oCount !== xCount && oCount !== xCount - 1) return false;
  if (win(board, 'X') && oCount !== xCount - 1) return false;
  if (win(board, 'O') && oCount !== xCount) return false;

  return true;
};

const win = (B, P) => {
  // B: board, P: player
  for (let i = 0; i < 3; i++) {
    if (P === B[0][i] && P === B[1][i] && P === B[2][i]) return true;
    if (P === B[i][0] && P === B[i][1] && P === B[i][2]) return true;
  }
  if (P === B[0][0] && P === B[1][1] && P === B[2][2]) return true;
  if (P === B[0][2] && P === B[1][1] && P === B[2][0]) return true;
  return false;
};

export { validTicTacToe };
