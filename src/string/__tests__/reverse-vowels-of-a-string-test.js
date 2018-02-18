import { assert } from 'chai';
import reverseVowels from '../reverse-vowels-of-a-string';

describe('Reverse Vowels of a String', () => {
  const testCases = [['hello', 'holle'], ['leetcode', 'leotcede']];

  testCases.forEach(([s, expected], index) => {
    it(`should reverse the vowels of a string ${index}`, () => {
      const actual = reverseVowels(s);
      assert.equal(actual, expected);
    });
  });
});
