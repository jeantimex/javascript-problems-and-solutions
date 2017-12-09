import { assert } from 'chai';
import combine from '../combinations';

const sorter = (a, b) => {
  if (a.length === b.length) {
    return a.toString().localeCompare(b.toString());
  }
  return a.length - b.length;
};

describe('Combinations', () => {
  const testCases = [[4, 2, [[2, 4], [3, 4], [2, 3], [1, 2], [1, 3], [1, 4]]]];

  testCases.forEach((testCase, index) => {
    it(`should get the combinations using back tracking ${index}`, () => {
      const n = testCase[0];
      const k = testCase[1];
      const expected = testCase[2];
      const actual = combine(n, k);
      assert(actual.sort(sorter), expected.sort(sorter));
    });
  });
});
