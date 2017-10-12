import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import isSameTree from '../same-tree';

describe('Same Tree', () => {
  const testCases = [['null', 'null', true], ['1,2,3', '2,1,3', false], ['1,2,3', '1,2,3', true]];

  testCases.map((testCase, index) => {
    it(`should validate the same tree case ${index}`, () => {
      const p = deserializeTree(testCase[0]);
      const q = deserializeTree(testCase[1]);
      const expected = testCase[2];
      const actual = isSameTree(p, q);
      assert.equal(actual, expected);
    });
  });
});
