import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import { closestValue, closestValueR } from '../closest-binary-search-tree-value';

describe('Closest Binary Search Tree Value', () => {
  const testCases = [['1', 0, 1], ['3,2,7,1,null,5,9', 4.9, 5], ['3,2,7', 7, 7], ['7,3,9,2,4', 6, 7]];

  testCases.map((testCase, index) => {
    it(`should get the closest binary search tree value ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const target = testCase[1];
      const expected = testCase[2];
      const actual = closestValue(root, target);
      assert.equal(actual, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should get the closest binary search tree value recursively ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const target = testCase[1];
      const expected = testCase[2];
      const actual = closestValueR(root, target);
      assert.equal(actual, expected);
    });
  });
});
