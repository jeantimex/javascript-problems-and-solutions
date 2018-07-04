# The Skyline Problem

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are **given the locations and height of all the buildings** as shown on a cityscape photo (Figure A), write a program to **output the skyline** formed by these buildings collectively (Figure B).

<!-- markdownlint-disable MD033 -->

<img alt="skyline1" src="https://user-images.githubusercontent.com/565300/41813528-8be85200-76ec-11e8-86c0-1a94eee8e86a.jpg" width="350" /><img alt="skyline2" src="https://user-images.githubusercontent.com/565300/41815136-3627f1fc-7716-11e8-9314-16ee383e3967.jpg" width="350" />

The geometric information of each building is represented by a triplet of integers `[Li, Ri, Hi]`, where `Li` and `Ri` are the x coordinates of the left and right edge of the ith building, respectively, and `Hi` is its height. It is guaranteed that `0 ≤ Li, Ri ≤ INT_MAX`, `0 < Hi ≤ INT_MAX`, and `Ri - Li > 0`. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: `[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]`.

The output is a list of "**key points**" (red dots in Figure B) in the format of `[ [x1,y1], [x2, y2], [x3, y3], ... ]` that uniquely defines a skyline. **A key point is the left endpoint of a horizontal line segment**. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as: `[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]`.

Notes:

- The number of buildings in any input list is guaranteed to be in the range `[0, 10000]`.
- The input list is already sorted in ascending order by the left x position `Li`.
- The output list must be sorted by the x position.
- There must be no consecutive horizontal lines of equal height in the output skyline. For instance, `[...[2 3], [4 5], [7 5], [11 5], [12 7]...]` is not acceptable; the three lines of height 5 should be merged into one in the final output as such: `[...[2 3], [4 5], [12 7], ...]`

```javascript
Object.defineProperty(Array.prototype, 'first', {
  get: function() {
    return this[0];
  },
});

Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length - 1];
  },
});

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = buildings => {
  return helper(buildings, 0, buildings.length - 1);
};

/**
 * @param {number[][]} buildings
 * @param {number} lo
 * @param {number} hi
 * @return {number[][]}
 */
const helper = (buildings, lo, hi) => {
  if (lo > hi) {
    return [];
  }

  if (lo === hi) {
    return [[buildings[lo][0], buildings[lo][2]], [buildings[lo][1], 0]];
  }

  const mid = lo + Math.floor((hi - lo) / 2);
  const left = helper(buildings, lo, mid);
  const right = helper(buildings, mid + 1, hi);

  let h1 = 0;
  let h2 = 0;

  const result = [];

  while (left.length && right.length) {
    let x, h;

    if (left.first[0] < right.first[0]) {
      [x, h1] = left.shift();
    } else if (left.first[0] > right.first[0]) {
      [x, h2] = right.shift();
    } else {
      [x, h1] = left.shift();
      [x, h2] = right.shift();
    }

    h = Math.max(h1, h2);

    if (result.length === 0 || result.last[1] != h) {
      result.push([x, h]);
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};
```
