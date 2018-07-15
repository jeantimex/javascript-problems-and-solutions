/**
 * Text Justification
 *
 * Given an array of words and a width maxWidth, format the text such that
 * each line has exactly maxWidth characters and is fully (left and right)
 * justified.
 *
 * You should pack your words in a greedy approach; that is, pack as many words
 * as you can in each line. Pad extra spaces ' ' when necessary so that each line
 * has exactly maxWidth characters.
 *
 * Extra spaces between words should be distributed as evenly as possible. If the
 * number of spaces on a line do not divide evenly between words, the empty slots
 * on the left will be assigned more spaces than the slots on the right.
 *
 * For the last line of text, it should be left justified and no extra space is
 * inserted between words.
 *
 * Note:
 *
 * A word is defined as a character sequence consisting of non-space characters only.
 * Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
 * The input array words contains at least one word.
 * Example 1:
 *
 * Input:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * Output:
 * [
 *    "This    is    an",
 *    "example  of text",
 *    "justification.  "
 * ]
 * Example 2:
 *
 * Input:
 * words = ["What","must","be","acknowledgment","shall","be"]
 * maxWidth = 16
 * Output:
 * [
 *   "What   must   be",
 *   "acknowledgment  ",
 *   "shall be        "
 * ]
 * Explanation: Note that the last line is "shall be    " instead of "shall     be",
 *              because the last line must be left-justified instead of fully-justified.
 *              Note that the second line is also left-justified becase it contains only one word.
 * Example 3:
 *
 * Input:
 * words = ["Science","is","what","we","understand","well","enough","to","explain",
 *          "to","a","computer.","Art","is","everything","else","we","do"]
 * maxWidth = 20
 * Output:
 * [
 *   "Science  is  what we",
 *   "understand      well",
 *   "enough to explain to",
 *   "a  computer.  Art is",
 *   "everything  else  we",
 *   "do                  "
 * ]
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const n = words.length;
  const res = [];

  for (var i = 0; i < n; i = j) {
    // Step 1. Use j to find out where to cut the row (i ... j-1)
    let len = -1;
    for (var j = i; j < n && len + 1 + words[j].length <= maxWidth; j++) {
      len += 1 + words[j].length;
    }

    // Step 2. Calculate how many spaces to add for each word
    let spaces = 1; // avg. spaces reserved for each word
    let extra = 0; // extra left spaces

    if (j !== i + 1 && j !== n) {
      spaces = Math.floor((maxWidth - len) / (j - 1 - i)) + 1;
      extra = (maxWidth - len) % (j - 1 - i);
    }

    // Step 3. Build the row with spaces + extra space + word
    let row = words[i];
    for (let k = i + 1; k < j; k++, extra--) {
      row += ' '.repeat(spaces + (extra > 0 ? 1 : 0)) + words[k];
    }
    row += ' '.repeat(maxWidth - row.length);

    // Step 4. Push the row to final result
    res.push(row);
  }

  return res;
};

export { fullJustify };
