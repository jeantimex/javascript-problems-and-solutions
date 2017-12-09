import { assert } from 'chai';
import combinationSum from '../combination-sum-iii';

const sorter = (a, b) => {
  if (a.length === b.length) {
    return a.toString().localeCompare(b.toString());
  }
  return a.length - b.length;
};

describe('Combination Sum III', () => {
  const testCases = [[3, 7, [[1, 2, 4]]], [3, 9, [[1, 2, 6], [1, 3, 5], [2, 3, 4]]]];

  testCases.forEach((testCase, index) => {
    it(`should get the combination sum using back tracking ${index}`, () => {
      const k = testCase[0];
      const n = testCase[1];
      const expected = testCase[2];
      const actual = combinationSum(k, n);
      assert(actual.sort(sorter), expected.sort(sorter));
    });
  });
});
