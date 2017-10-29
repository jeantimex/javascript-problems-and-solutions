import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import findBottomLeftValue from '../find-bottom-left-tree-value';

describe('Find Bottom Left Tree Value', () => {
  const testCases = [['2,1,3', 1], ['1,2,3,4,null,5,6,null,null,7', 7]];

  testCases.map((testCase, index) => {
    it(`should find the bottom left tree value ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = findBottomLeftValue(root);
      assert.equal(actual, expected);
    });
  });
});
