/**
 * The Skyline Problem
 */

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

export { getSkyline };
