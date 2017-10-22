import { assert } from 'chai';
import { serialize, deserialize } from '../serialize-and-deserialize-binary-tree';
import { tree1, tree2, tree3, tree4, tree5 } from 'common/trees';

describe('Serialize and Deserialize Binary Tree', () => {
  describe('Serialize', () => {
    const testCases = [
      [null, null],
      [tree1, '[1,2,3]'],
      [tree2, '[1,null,2]'],
      [tree3, '[1,null,2,3,4]'],
      [tree4, '[1,null,2,3]'],
      [tree5, '[1,2,null,3]'],
    ];

    testCases.map((testCase, index) => {
      it(`should serialize tree ${index}`, () => {
        const root = testCase[0];
        const expected = testCase[1];
        const actual = serialize(root);
        assert.equal(actual, expected);
      });
    });
  });

  describe('Deserialize', () => {
    const testCases = [
      [null, null],
      [undefined, null],
      ['null', null],
      ['[undefined]', null],
      ['bad input', null],
      ['', null],
      ['[1,2,3]', '[1,2,3]'],
      ['[1,null,2]', '[1,null,2]'],
      ['[1,null,2,3,4]', '[1,null,2,3,4]'],
      ['[1,null,2,3]', '[1,null,2,3]'],
      ['[1,2,null,3]', '[1,2,null,3]'],
    ];

    testCases.map((testCase, index) => {
      it(`should deserialize the tree ${index}`, () => {
        const data = testCase[0];
        const expected = testCase[1];
        const actual = serialize(deserialize(data));
        assert.equal(actual, expected);
      });
    });
  });
});
