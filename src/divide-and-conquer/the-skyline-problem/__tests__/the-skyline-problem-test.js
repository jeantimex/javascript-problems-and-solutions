import { assert } from 'chai';
import { getSkyline } from '../the-skyline-problem';

describe('The Skyline Problem', () => {
  const testCases = [
    [[], []],
    [[[0, 2, 3], [2, 5, 3]], [[0, 3], [5, 0]]],
    [[[1, 2, 1], [1, 2, 2], [1, 2, 3]], [[1, 3], [2, 0]]],
    [
      [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]],
      [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]],
    ],
  ];

  testCases.forEach(([buildings, expected], index) => {
    const actual = getSkyline(buildings);
    assert.deepEqual(actual, expected);
  });
});
