import { assert } from 'chai';
import TreeNode from '../../common/tree-node';
import { serializeTree, deserializeTree } from '../tree-util';
import { tree1, tree2, tree3, tree4, tree5 } from '../../tree/__tests__/trees';

describe('Tree Util', () => {
  describe('Serialize', () => {
    const testCases = [
      [null, null],
      [tree1, '1,2,3'],
      [tree2, '1,null,2'],
      [tree3, '1,null,2,3,4'],
      [tree4, '1,null,2,3'],
      [tree5, '1,2,null,3'],
    ];

    testCases.map((testCase, index) => {
      it(`should serialize the tree ${index}: ${testCase[1]}`, () => {
        const root = testCase[0];
        const expected = testCase[1];
        const actual = serializeTree(root);
        assert.equal(actual, expected);
      });
    });
  });

  describe('deserialize', () => {
    const testCases = [
      [null],
      [undefined, null],
      ['null', null],
      ['undefined', null],
      ['bad input', null],
      ['', null],
      ['1,2,3'],
      ['1,null,2'],
      ['1,null,2,3,4'],
      ['1,null,2,3'],
      ['1,2,null,3'],
    ];

    testCases.map((testCase, index) => {
      it(`should deserialize the tree ${index}: ${testCase[0]}`, () => {
        const input = testCase[0];
        const expected = testCase.length === 1 ? testCase[0] : testCase[1];
        const actual = serializeTree(deserializeTree(input));
        assert.equal(actual, expected);
      });
    });
  });
});
