import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import findFrequentTreeSum from '../most-frequent-subtree-sum';

describe('Most Frequent Subtree Sum', () => {
  const testCases = [['null', []], ['5,2,-3', [-3, 2, 4]], ['5,2,-5', [2]]];

  testCases.map((testCase, index) => {
    it(`should get the most frequent subtree sum`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = findFrequentTreeSum(root).sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});
