import { assert } from 'chai';
import { serializeLinkedList, deserializeLinkedList } from 'utils/linked-list-util';
import addTwoNumbers from '../add-two-numbers';

describe('Add Two Numbers', () => {
  const testCases = [
    ['', '', ''],
    ['1', '2', '3'],
    ['', '1', '1'],
    ['1', '', '1'],
    ['2,4,3', '5,6,4', '7,0,8'],
    ['9', '9', '8,1'],
  ];

  testCases.forEach((testCase, index) => {
    it(`should add two numbers ${index}`, () => {
      const l1 = deserializeLinkedList(testCase[0]);
      const l2 = deserializeLinkedList(testCase[1]);
      const expected = testCase[2];
      const actual = serializeLinkedList(addTwoNumbers(l1, l2));
      assert.equal(actual, expected);
    });
  });
});
