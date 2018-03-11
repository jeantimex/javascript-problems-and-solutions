import { assert } from 'chai';
import addBoldTag from '../add-bold-tag-in-string';

describe('Add Bold Tag in String', () => {
  const testCases = [
    ['abcxyz123', ['abc', '123'], '<b>abc</b>xyz<b>123</b>'],
    ['aaabbcc', ['aaa', 'aab', 'bc'], '<b>aaabbc</b>c'],
  ];

  testCases.forEach(([s, dict, expected], index) => {
    it(`should add the bold tag correctly ${index}`, () => {
      const actual = addBoldTag(s, dict);
      assert.equal(actual, expected);
    });
  });
});
