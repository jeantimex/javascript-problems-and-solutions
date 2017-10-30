import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import longestUnivaluePath from '../longest-univalue-path';

describe('Longest Univalue Path', () => {
  const testCases = [['5,4,5,1,1,null,5', 2], ['1,4,5,4,4,null,5', 2]];

  testCases.map((testCase, index) => {
    it(`should get the longest univale path`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = longestUnivaluePath(root);
      assert.equal(actual, expected);
    });
  });
});
