import { assert } from 'chai';
import combinationSum from '../combination-sum-ii';

const sorter = (a, b) => {
  if (a.length === b.length) {
    return a.toString().localeCompare(b.toString());
  }
  return a.length - b.length;
};

describe('Combination Sum', () => {
  const testCases = [
    [[2, 3, 6, 7], 7, [[7], [2, 2, 3]]],
    [[7, 3, 6, 2], 7, [[7], [2, 2, 3]]],
    [[10, 1, 2, 7, 6, 1, 5], 8, [[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the combination sum using back tracking ${index}`, () => {
      const candidates = testCase[0];
      const target = testCase[1];
      const expected = testCase[2];
      const actual = combinationSum(candidates, target);
      assert(actual.sort(sorter), expected.sort(sorter));
    });
  });
});
