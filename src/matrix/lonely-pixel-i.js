/**
 * Lonely Pixel I
 *
 * Given a picture consisting of black and white pixels, find the number of black lonely pixels.
 *
 * The picture is represented by a 2D char array consisting of 'B' and 'W',
 * which means black and white pixels respectively.
 *
 * A black lonely pixel is character 'B' that located at a specific position where the same row and
 * same column don't have any other black pixels.
 *
 * Example:
 *
 * Input:
 * [['W', 'W', 'B'],
 *  ['W', 'B', 'W'],
 *  ['B', 'W', 'W']]
 *
 * Output: 3
 *
 * Explanation: All the three 'B's are black lonely pixels.
 *
 * Note:
 * The range of width and height of the input 2D array is [1,500].
 */

/**
 * @param {character[][]} picture
 * @return {number}
 */
const findLonelyPixel = picture => {
  const m = picture.length;
  const n = picture[0].length;

  // Step 1. Count how many 'B' in each row and column
  const rowCount = Array(m).fill(0);
  const colCount = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B') {
        rowCount[i]++;
        colCount[j]++;
      }
    }
  }

  // Step 2. Count out the lonely pixel
  let total = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B' && rowCount[i] === 1 && colCount[j] === 1) {
        total++;
      }
    }
  }

  return total;
};

export { findLonelyPixel };
