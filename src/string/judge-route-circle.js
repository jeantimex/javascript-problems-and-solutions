/**
 * Judge Route Circle
 *
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
 * judge if this robot makes a circle, which means it moves back to the original place.
 *
 * The move sequence is represented by a string. And each move is represent by a character.
 * The valid robot moves are R (Right), L (Left), U (Up) and D (down).
 *
 * The output should be true or false representing whether the robot makes a circle.
 *
 * Example 1:
 * Input: "UD"
 * Output: true
 *
 * Example 2:
 * Input: "LL"
 * Output: false
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
  const map = { R: 0, L: 0, U: 0, D: 0 };

  for (let c of moves) {
    map[c]++;
  }

  return map['R'] === map['L'] && map['U'] === map['D'];
};

export default judgeCircle;
