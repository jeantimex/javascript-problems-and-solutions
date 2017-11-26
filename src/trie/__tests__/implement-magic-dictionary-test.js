import { assert } from 'chai';
import MagicDictionary from '../implement-magic-dictionary';

describe('Implement Magic Dictionary', () => {
  let magicDict;
  const dict = ['hello', 'leetcode', 'hhh'];
  const testCases = [['hello', false], ['hhllo', true], ['hell', false], ['leetcoded', false]];

  beforeEach(() => {
    magicDict = new MagicDictionary();
    magicDict.buildDict(dict);
  });

  testCases.forEach((testCase, index) => {
    it('should build the magic dictionary ${index}', () => {
      const word = testCase[0];
      const expected = testCase[1];
      const actual = magicDict.search(word);
      assert.equal(actual, expected);
    });
  });
});
