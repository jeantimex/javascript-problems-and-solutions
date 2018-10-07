/**
 * Number of Boomerangs
 *
 * Given n points in the plane that are all pairwise distinct,
 * a "boomerang" is a tuple of points (i, j, k) such that
 * the distance between i and j equals the distance between i and k (the order of the tuple matters).
 *
 * Find the number of boomerangs.
 * You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
 *
 * Example:
 * Input:
 * [[0,0],[1,0],[2,0]]
 *
 * Output:
 * 2
 *
 * Explanation:
 * The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = points => {
  let total = 0;
  let map = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }

      const d = calcDistance(points[i], points[j]);
      map[d] = ~~map[d] + 1;
    }

    Object.values(map).forEach(val => {
      total += val * (val - 1); // permutations P(n, 2) = n * (n - 1)
    });

    map = {};
  }

  return total;
};

const calcDistance = ([x1, y1], [x2, y2]) => (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

export { numberOfBoomerangs };
