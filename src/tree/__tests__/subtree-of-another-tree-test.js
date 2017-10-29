import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import isSubtree from '../subtree-of-another-tree';

describe('Subtree of Another Tree', () => {
  const testCases = [['3,4,5,1,2', '4,1,2', true], ['3,4,5,1,2,null,null,null,null,0', '4,1,2', false]];

  testCases.map((testCase, index) => {
    it(`should validate subtree of another tree ${testCase[0]}`, () => {
      const s = deserializeTree(testCase[0]);
      const t = deserializeTree(testCase[1]);
      const expected = testCase[2];
      const actual = isSubtree(s, t);
      assert.equal(actual, expected);
    });
  });
});
