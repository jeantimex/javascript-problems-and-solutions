import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import verifyPreorder from '../verify-preorder-sequence-in-binary-search-tree';

describe('Verify Preorder Sequence in Binary Search Tree', () => {
  const testCases = [[[1], true], [[1, 2], true], [[3, 4, 1, 6, 5, 7], false]];

  testCases.map((testCase, index) => {
    it(`should verify preorder sequence in binary search tree ${testCase[0]}`, () => {
      const input = testCase[0];
      const expected = testCase[1];
      const actual = verifyPreorder(input);
      assert.equal(actual, expected);
    });
  });
});
