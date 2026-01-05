import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import isBalanced from '../balanced-binary-tree';

describe('Balanced Binary Tree', () => {
  const testCases = [
    ['', true],
    ['1', true],
    ['1,2', true],
    ['1,2,null,3', false],
    ['1,null,2,null,3', false],
    ['1,2,null,3,null,4', false],
    ['1,null,2,null,3,null,4', false],
  ];

  testCases.map((testCase, index) => {
    it(`should validate tree ${testCase[0]} if it's balanced`, () => {
      const root = deserializeTree(testCase[0]);
      const actual = isBalanced(root);
      const expected = testCase[1];
      assert.equal(actual, expected);
    });
  });
});
