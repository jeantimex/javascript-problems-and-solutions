import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import largestValues from '../find-largest-value-in-each-tree-row';

describe('Find Largest Value in Each Tree Row', () => {
  const testCases = [['1,3,2,5,3,null,9', [1, 3, 9]], ['null', []]];

  testCases.map((testCase, index) => {
    it(`should find the largest value in each tree row`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = largestValues(root);
      assert.deepEqual(actual, expected);
    });
  });
});
