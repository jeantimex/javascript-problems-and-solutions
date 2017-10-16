import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import isUnivalTree from '../univalue-tree';

describe('Univalue Tree', () => {
  const testCases = [
    ['null', true],
    ['1', true],
    ['1,1', true],
    ['1,null,1', true],
    ['1,1,1,2', false],
    ['1,null,2', false],
  ];

  testCases.map((testCase, index) => {
    it(`should validate if tree ${testCase[0]} is unival tree`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = isUnivalTree(root);
      assert.equal(actual, expected);
    });
  });
});
