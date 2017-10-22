import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import deleteNode from '../delete-node-in-a-bst';

describe('Delete Node in a BST', () => {
  const testCases = [
    ['5,3,6,2,4,null,7', 3, '5,4,6,2,null,null,7'],
    ['5,3,6,2,4,null,7', 6, '5,3,7,2,4'],
    ['5,3,7,2,4,6', 6, '5,3,7,2,4'],
    ['5,3,7,2,4,6', 10, '5,3,7,2,4,6'],
    ['8,3,9,2,5,null,10,null,null,4', 3, '8,4,9,2,5,null,10'],
    ['8,3,9,2,null,null,10', 3, '8,2,9,null,null,null,10'],
  ];

  testCases.map((testCase, index) => {
    it(`should delete node in BST ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const key = testCase[1];
      const expected = testCase[2];
      const actual = serializeTree(deleteNode(root, key));
      assert.equal(actual, expected);
    });
  });
});
