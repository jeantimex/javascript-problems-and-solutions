import { assert } from 'chai';
import Trie from '../trie';

describe('Trie', () => {
  const words = ['the', 'a', 'there', 'answer', 'any', 'by', 'bye', 'their'];
  let trie;

  beforeEach(() => {
    // Create a new trie
    trie = new Trie();

    // Insert words into the trie
    words.forEach(word => {
      trie.insert(word);
    });
  });

  describe('Search', () => {
    const testCases = [
      ['the', true],
      ['a', true],
      ['there', true],
      ['answer', true],
      ['any', true],
      ['by', true],
      ['bye', true],
      ['their', true],
      ['b', false],
      ['th', false],
      ['z', false],
      ['ant', false],
      ['theirs', false],
      ['abc', false],
    ];

    testCases.forEach((testCase, index) => {
      it(`should search the word ${testCase[0]}`, () => {
        const word = testCase[0];
        const expected = testCase[1];
        const actual = trie.search(word);
        assert.equal(actual, expected);
      });
    });
  });

  describe('startsWith', () => {
    const testCases = [
      ['the', true],
      ['a', true],
      ['there', true],
      ['answer', true],
      ['any', true],
      ['by', true],
      ['bye', true],
      ['their', true],
      ['b', true],
      ['th', true],
      ['z', false],
      ['ant', false],
      ['theirs', false],
      ['abc', false],
    ];

    testCases.forEach((testCase, index) => {
      it(`should search the prefix ${testCase[0]}`, () => {
        const word = testCase[0];
        const expected = testCase[1];
        const actual = trie.startsWith(word);
        assert.equal(actual, expected);
      });
    });
  });
});
