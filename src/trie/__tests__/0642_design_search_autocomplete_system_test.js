import { assert } from 'chai';
import AutocompleteSystem from '../design-search-autocomplete-system';

describe('Design Search Autocomplete System', () => {
  const testCases = [
    [
      ['i love you', 'island', 'iroman', 'i love leetcode'],
      [5, 3, 2, 2],
      ['i', ' ', 'a', '#'],
      [['i love you', 'island', 'i love leetcode'], ['i love you', 'i love leetcode'], [], []],
    ],
    [
      ['i love you', 'island', 'iroman', 'i love leetcode'],
      [5, 3, 2, 2],
      ['i', ' ', 'a', '#', 'i', ' ', 'a', '#', 'i', ' ', 'a', '#'],
      [
        ['i love you', 'island', 'i love leetcode'],
        ['i love you', 'i love leetcode'],
        [],
        [],
        ['i love you', 'island', 'i love leetcode'],
        ['i love you', 'i love leetcode', 'i a'],
        ['i a'],
        [],
        ['i love you', 'island', 'i a'],
        ['i love you', 'i a', 'i love leetcode'],
        ['i a'],
        [],
      ],
    ],
  ];

  testCases.forEach((testCase, index) => {
    it(`should provide the correct suggestion - ${index}`, () => {
      const sentences = testCase[0];
      const times = testCase[1];
      const system = new AutocompleteSystem(sentences, times);
      const inputs = testCase[2];
      const expected = testCase[3];

      inputs.forEach((c, i) => {
        assert.deepEqual(system.input(c), expected[i]);
      });
    });
  });
});
