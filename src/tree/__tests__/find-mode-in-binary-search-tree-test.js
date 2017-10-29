import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import findMode from '../find-mode-in-binary-search-tree';

describe('Find Mode in Binary Search Tree', () => {
  const testCases = [['1,null,2,2', [2]], ['6,2,8,0,4,7,9,null,null,2,6', [2, 6]]];

  testCases.map((testCase, index) => {
    it(`should find the mode in BST ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = findMode(root).sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});
