import { assert } from 'chai';
import { alienOrder } from '../alien-dictionary';

describe('Alien Dictionary', () => {
  const testCases = [
    [null, ['c', 'b', 'a'], false],
    ['', ['c', 'b', 'a'], false],
    ['cba', ['c', 'b', 'a'], true],
    ['cba', ['cc', 'bb', 'aa'], true],
    ['cba', ['ca', 'bc', 'ab'], true],
    ['cba', ['cc', 'ca', 'ab'], true],
    ['cba', ['cc', 'ab', 'ca'], false],
    ['cba', ['c', 'cc', 'ca'], true],
    ['cba', ['cc', 'c', 'ca'], false],
    ['cba', ['cc', '', 'ca'], false],
    ['cba', ['', 'c', 'ca'], true],
  ];

  testCases.forEach(([dict, words, expected], index) => {
    it(`should check the alien words order ${index}`, () => {
      const actual = alienOrder(dict, words);
      assert.equal(actual, expected);
    });
  });
});
