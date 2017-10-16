import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import sumNumbers from '../sum-root-to-leaf-numbers';

describe('Sum Root to Leaf Numbers', () => {
  const testCases = [['null', 0], ['1', 1], ['1,2', 12], ['1,2,3', 25]];

  testCases.map((testCase, index) => {
    it(`should calculate the sum from roof to leaf nodes for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = sumNumbers(root);
      assert.equal(actual, expected);
    });
  });
});
