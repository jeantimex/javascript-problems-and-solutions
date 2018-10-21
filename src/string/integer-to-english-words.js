/**
 * Integer to English Words
 *
 * Convert a non-negative integer to its english words representation.
 * Given input is guaranteed to be less than 231 - 1.
 *
 * Example 1:
 *
 * Input: 123
 * Output: "One Hundred Twenty Three"
 * Example 2:
 *
 * Input: 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 * Example 3:
 *
 * Input: 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 * Example 4:
 *
 * Input: 1234567891
 * Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

const LESS_THAN_20 = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];
const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = num => {
  if (num === 0) return 'Zero';

  let i = 0;
  let words = '';

  while (num > 0) {
    if (num % 1000 !== 0) words = helper(num % 1000) + THOUSANDS[i] + ' ' + words;
    num = Math.floor(num / 1000);
    i++;
  }

  return words.trim();
};

const helper = num => {
  if (num === 0) return '';
  else if (num < 20) return LESS_THAN_20[num] + ' ';
  else if (num < 100) return TENS[Math.floor(num / 10)] + ' ' + helper(num % 10);
  else return LESS_THAN_20[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
};

export { numberToWords };
