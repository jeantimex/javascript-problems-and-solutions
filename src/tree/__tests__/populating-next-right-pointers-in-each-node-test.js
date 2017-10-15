import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import connect from '../populating-next-right-pointers-in-each-node';

/**
 * Encodes a link tree to a single string.
 *
 * @param {TreeLinkNode} root
 * @return {string}
 */
const serializeLinkTree = root => {
  const getNext = root => {
    while (root) {
      if (root.left) {
        return root.left;
      }
      if (root.right) {
        return root.right;
      }
      root = root.next;
    }
    return null;
  };

  if (!root) {
    return null;
  }

  let data = [];

  while (root) {
    let current = root;

    while (current) {
      data.push(current.val);
      current = current.next;
    }
    data.push(null);

    root = getNext(root);
  }

  return JSON.stringify(data).slice(1, -1);
};

describe('Populating Next Right Pointers in Each Node', () => {
  const testCases = [['1', '1,null'], ['1,2,3', '1,null,2,3,null'], ['1,2,3,4,5,6,7', '1,null,2,3,null,4,5,6,7,null']];

  testCases.map((testCase, index) => {
    it(`should populate the next right pointers for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      connect(root);
      const expected = testCase[1];
      const actual = serializeLinkTree(root);
      assert.equal(actual, expected);
    });
  });
});
