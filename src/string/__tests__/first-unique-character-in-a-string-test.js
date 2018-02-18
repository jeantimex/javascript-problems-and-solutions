import { assert } from 'chai';
import firstUniqChar from '../first-unique-character-in-a-string';

describe('First Unique Character in a String', () => {
  const testCases = [['leetcode', 0], ['loveleetcode', 2], ['aaa', -1]];

  testCases.forEach(([s, expected], index) => {
    it(`should find the first unique character in the string, ${index}`, () => {
      const actual = firstUniqChar(s);
      assert.equal(actual, expected);
    });
  });
});
