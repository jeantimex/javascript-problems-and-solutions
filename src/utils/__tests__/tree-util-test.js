import { assert } from 'chai';
import TreeNode from 'common/tree-node';
import { serializeTree, deserializeTree, cloneTree, searchTreeNode } from 'utils/tree-util';
import { tree1, tree2, tree3, tree4, tree5 } from 'common/trees';

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

  describe('clone', () => {
    const testCases = [tree1, tree2, tree3, tree4, tree5];

    testCases.map((testCase, index) => {
      it(`should clone the tree ${index}`, () => {
        const root = testCase;
        const clone = cloneTree(root);
        const expected = serializeTree(root);
        const actual = serializeTree(clone);
        assert.equal(actual, expected);
      });
    });
  });

  describe('search tree node', () => {
    const testCases = [[tree1, 2], [tree1, 3]];

    testCases.map((testCase, index) => {
      it(`should search the tree node ${testCase[1]}`, () => {
        const root = testCase[0];
        const val = testCase[1];
        const node = searchTreeNode(root, val);
        assert.equal(node ? node.val : null, val);
      });
    });
  });
});
