import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import { isSymmetric, isSymmetricDFS, isSymmetricBFS } from '../symmetric-tree';

describe('Symmetric Tree', () => {
  const testCases = [['null', true], ['1,2,2', true], ['1,2,2,3,4,4,3', true], ['1,2,2,null,3,null,3', false]];

  testCases.map((testCase, index) => {
    it(`should validate symmetric tree recursively ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = isSymmetric(root);
      assert.equal(actual, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should validate symmetric tree using DFS iteratively ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = isSymmetricDFS(root);
      assert.equal(actual, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should validate symmetric tree using BFS iteratively ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = isSymmetricBFS(root);
      assert.equal(actual, expected);
    });
  });
});
