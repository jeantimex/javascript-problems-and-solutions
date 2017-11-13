import { assert } from 'chai';
import ListNode from 'common/list-node';
import { serializeLinkedList, deserializeLinkedList } from 'utils/linked-list-util';

describe('Linked List Util', () => {
  const testCases = ['', '1', '1,2', '1,2,3', 'a,b,c'];

  testCases.forEach((testCase, index) => {
    it(`should deserialize and serialize the linked list ${index}: ${testCase}`, () => {
      const listNode = deserializeLinkedList(testCase);
      const encode = serializeLinkedList(listNode);
      assert.equal(encode, testCase);
    });
  });
});
