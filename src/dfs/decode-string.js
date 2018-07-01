/**
 * Decode String
 *
 * Given an encoded string, return it's decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
 * is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 *
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those
 * repeat numbers, k. For example, there won't be input like 3a or 2[4].
 *
 * Examples:
 *
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const helper = () => {
    let count = 0;
    let word = '';

    for (++index; index < s.length; index++) {
      let ch = s[index];

      if (ch === '[') {
        word += helper().repeat(count);
        count = 0;
      } else if (ch === ']') {
        break;
      } else if (ch >= '0' && ch <= '9') {
        count = count * 10 + (ch - '0');
      } else {
        word += ch;
      }
    }

    return word;
  };

  let index = -1;
  return helper();
};
