import { assert } from 'chai';
import { serializeTree } from 'utils/tree-util';
import generateTrees from '../unique-binary-search-trees-ii';

describe('Unique Binary Search Trees II', () => {
  const testCases = [
    [0, []],
    [1, ['1']],
    [2, ['1,null,2', '2,1']],
    [3, ['1,null,2,null,3', '1,null,3,2', '2,1,3', '3,1,null,null,2', '3,2,null,1']],
  ];

  testCases.map((testCase, index) => {
    it(`should generate the unique binary search tree when input is ${testCase[0]}`, () => {
      const n = testCase[0];
      const expected = testCase[1];
      const actual = generateTrees(n)
        .map(tree => serializeTree(tree))
        .sort();
      assert.deepEqual(actual, expected);
    });
  });
});
