import { assert } from 'chai';
import WordDictionary from '../add-and-search-word-data-structure-design';

describe('Add and Search Word - Data structure design', () => {
  let dict;

  const testCases = [['pad', false], ['bad', true], ['b.d', true], ['b..', true], ['.ad', true], ['..z', false]];

  beforeEach(() => {
    dict = new WordDictionary();
    dict.addWord('bad');
    dict.addWord('dad');
    dict.addWord('mad');
    dict.addWord('bbb');
  });

  testCases.forEach(testCase => {
    it('should search for the word', () => {
      const word = testCase[0];
      const expected = testCase[1];
      const actual = dict.search(word);
      assert.equal(actual, expected);
    });
  });
});
