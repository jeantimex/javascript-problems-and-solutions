# Island Perimeter

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:
```
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
```
Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:

![island](https://user-images.githubusercontent.com/565300/41206699-ef866c78-6cbc-11e8-8b3a-1e52c8a0baf7.png)

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  let islands = 0;
  let neighbours = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        islands++;

        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          neighbours++; // Count the neighbours on its bottom
        }

        if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
          neighbours++; // Count the neighbours on its right
        }
      }
    }
  }

  return islands * 4 - neighbours * 2;
};
```
