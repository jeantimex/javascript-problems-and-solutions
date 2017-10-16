import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import countUnivalSubtrees from '../count-univalue-subtrees';

describe('Count Univalue Subtrees', () => {
  const testCases = [['1', 1], ['1,1', 2], ['1,1,1', 3], ['1,2,3', 2], ['5,1,5,5,5,null,5', 4]];

  testCases.map((testCase, index) => {
    it(`should count the unival subtrees in ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = countUnivalSubtrees(root);
      assert.equal(actual, expected);
    });
  });
});
