import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import { serialize, deserialize } from '../serialize-and-deserialize-bst';

describe('Serialize and Deserialize BST', () => {
  const testCases = ['2,1,3', null];

  testCases.map((testCase, index) => {
    it(`should serialize and deserialize BST ${testCase}`, () => {
      const root = deserializeTree(testCase);
      const expected = serializeTree(deserialize(serialize(root)));
      const actual = testCase;
      assert.equal(actual, expected);
    });
  });
});
