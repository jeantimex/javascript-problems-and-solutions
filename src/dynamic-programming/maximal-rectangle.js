/**
 * Maximal Rectangle
 *
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 *
 * Example:
 *
 * Input:
 * [
 *   ["1","0","1","0","0"],
 *   ["1","0","1","1","1"],
 *   ["1","1","1","1","1"],
 *   ["1","0","0","1","0"]
 * ]
 * Output: 6
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = matrix => {
  if (!matrix || matrix.length === 0) {
    return 0;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const left = Array(n).fill(0);
  const right = Array(n).fill(n - 1);
  const height = Array(n).fill(0);

  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    let currLeft = 0;
    let currRight = n;

    for (let j = 0; j < n; j++) {
      height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
    }

    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[j] = Math.max(currLeft, left[j]);
      } else {
        left[j] = 0;
        currLeft = j + 1;
      }
    }

    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === '1') {
        right[j] = Math.min(currRight, right[j]);
      } else {
        right[j] = n - 1;
        currRight = j - 1;
      }
    }

    for (let j = 0; j < n; j++) {
      maxArea = Math.max(maxArea, (right[j] - left[j] + 1) * height[j]);
    }
  }

  return maxArea;
};

export { maximalRectangle };
