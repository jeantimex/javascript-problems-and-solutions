/**
 * Reverse Vowels of a String
 *
 * Write a function that takes a string as input and reverse only the vowels of a string.
 *
 * Example 1:
 * Given s = "hello", return "holle".
 *
 * Example 2:
 * Given s = "leetcode", return "leotcede".
 *
 * Note:
 * The vowels does not include the letter "y".
 */

import { swap } from 'utils/swap';

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
  const isVowel = c => 'aeiou'.includes(c.toLowerCase());
  let arr = s.split('');

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    while (i < j && !isVowel(s[i])) {
      i++;
    }
    while (j > i && !isVowel(s[j])) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  return arr.join('');
};

export default reverseVowels;
