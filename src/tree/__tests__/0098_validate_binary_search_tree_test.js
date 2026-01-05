import { assert } from 'chai';
import isValidBST from '../validate-binary-search-tree';
import { deserializeTree } from 'utils/tree-util';

describe('Validate Binary Search Tree', () => {
  const testCases = [
    ['', false],
    ['null', false],
    ['1,1', false],
    ['1,2,3', false],
    ['1,null,2', true],
    ['1,2', false],
    ['2,1,3', true],
    ['2,1', true],
    ['5,4,7,3,null,6,8', true],
  ];

  testCases.map((testCase, index) => {
    it(`should validate the BST ${testCase[0]} correctly`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = isValidBST(root);
      assert.equal(actual, expected);
    });
  });
});
