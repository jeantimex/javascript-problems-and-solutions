/**
 * Island Perimeter
 *
 * You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water,
 * and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes"
 * (water inside that isn't connected to the water around the island). One cell is a square with side length 1.
 *
 * The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 *
 * Example:
 *
 * [[0,1,0,0],
 *  [1,1,1,0],
 *  [0,1,0,0],
 *  [1,1,0,0]]
 *
 * Answer: 16
 */

/**
 * Solution I
 *
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter_I = grid => {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  let perimeter = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        perimeter += i === 0 || grid[i - 1][j] === 0 ? 1 : 0;
        perimeter += j === 0 || grid[i][j - 1] === 0 ? 1 : 0;
        perimeter += j === n - 1 || grid[i][j + 1] === 0 ? 1 : 0;
        perimeter += i === m - 1 || grid[i + 1][j] === 0 ? 1 : 0;
      }
    }
  }

  return perimeter;
};

/**
 * Solution II
 *
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter_II = grid => {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  let neighbours = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands++;

        if (i < m - 1 && grid[i + 1][j] === 1) {
          neighbours++;
        }

        if (j < n - 1 && grid[i][j + 1] === 1) {
          neighbours++;
        }
      }
    }
  }

  return islands * 4 - neighbours * 2;
};

export { islandPerimeter_I, islandPerimeter_II };
