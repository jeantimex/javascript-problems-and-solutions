/**
 * Lonely Pixel II
 *
 * Given a picture consisting of black and white pixels, and a positive integer N,
 * find the number of black pixels located at some specific row R and column C that align with all the following rules:
 *
 * Row R and column C both contain exactly N black pixels.
 * For all rows that have a black pixel at column C, they should be exactly the same as row R
 * The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels
 * respectively.
 *
 * Example:
 * Input:
 * [['W', 'B', 'W', 'B', 'B', 'W'],
 *  ['W', 'B', 'W', 'B', 'B', 'W'],
 *  ['W', 'B', 'W', 'B', 'B', 'W'],
 *  ['W', 'W', 'B', 'W', 'B', 'W']]
 *
 * N = 3
 * Output: 6
 * Explanation: All the bold 'B' are the black pixels we need (all 'B's at column 1 and 3).
 *         0    1    2    3    4    5         column index
 * 0    [['W', 'B', 'W', 'B', 'B', 'W'],
 * 1     ['W', 'B', 'W', 'B', 'B', 'W'],
 * 2     ['W', 'B', 'W', 'B', 'B', 'W'],
 * 3     ['W', 'W', 'B', 'W', 'B', 'W']]
 * row index
 *
 * Take 'B' at row R = 0 and column C = 1 as an example:
 * Rule 1, row R = 0 and column C = 1 both have exactly N = 3 black pixels.
 * Rule 2, the rows have black pixel at column C = 1 are row 0, row 1 and row 2. They are exactly the same as row R = 0.
 *
 * Note:
 * The range of width and height of the input 2D array is [1,200].
 */

/**
 * Time complexity: O(n^2)
 *
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
const findBlackPixel = (picture, N) => {
  const m = picture.length;
  const n = picture[0].length;

  // Step 1. Count how many 'B' in each row and column
  // and build the map of row key <=> pattern count when there is N 'B' in that row
  const map = {};
  const colCount = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    let rowCount = 0;
    let rowKey = '';

    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B') {
        rowCount++;
        colCount[j]++;
      }
      rowKey += picture[i][j];
    }

    if (rowCount === N) {
      map[rowKey] = ~~map[rowKey] + 1;
    }
  }

  // Step 2. Count out the lonely pixel
  let total = 0;

  Object.entries(map).forEach(([rowKey, count]) => {
    if (count === N) {
      // This row can potentially be our answer
      for (let j = 0; j < n; j++) {
        // Double check the column and also make sure it's value is 'B'
        if (colCount[j] === N && rowKey[j] === 'B') {
          total += N;
        }
      }
    }
  });

  return total;
};
