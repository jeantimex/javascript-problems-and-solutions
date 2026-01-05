import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import { addOneRowDFS, addOneRowBFS } from '../add-one-row-to-tree';

describe('Add One Row to Tree', () => {
  const testCases = [
    ['4', 0, 1, '0,4'],
    ['4,null,1', 1, 2, '4,1,1,null,null,null,1'],
    ['4,null,1,null,2,null,3', 1, 3, '4,null,1,1,1,null,null,null,2,null,3'],
    ['4,2,6,3,1,5', 1, 2, '4,1,1,2,null,null,6,3,1,5'],
    ['4,2,null,3,1', 1, 3, '4,2,null,1,1,3,null,null,1'],
    ['4,1,2,3,4,5,6', 1, 3, '4,1,2,1,1,1,1,3,null,null,4,5,null,null,6'],
  ];

  testCases.map((testCase, index) => {
    it(`should add one row to tree DFS`, () => {
      const root = deserializeTree(testCase[0]);
      const v = testCase[1];
      const d = testCase[2];
      const expected = testCase[3];
      const actual = serializeTree(addOneRowDFS(root, v, d));
      assert.equal(actual, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should add one row to tree BFS`, () => {
      const root = deserializeTree(testCase[0]);
      const v = testCase[1];
      const d = testCase[2];
      const expected = testCase[3];
      const actual = serializeTree(addOneRowBFS(root, v, d));
      assert.equal(actual, expected);
    });
  });
});
