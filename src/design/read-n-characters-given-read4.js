/**
 * Read N Characters Given Read4
 *
 * The API: int read4(char *buf) reads 4 characters at a time from a file.
 *
 * The return value is the actual number of characters read. For example, it returns 3 if there is only 3
 * characters left in the file.
 *
 * By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from
 * the file.
 *
 * Example 1:
 *
 * Input: buf = "abc", n = 4
 * Output: "abc"
 * Explanation: The actual number of characters read is 3, which is "abc".
 *
 * Example 2:
 *
 * Input: buf = "abcde", n = 5
 * Output: "abcde"
 *
 * Note:
 * The read function will only be called once for each test case.
 */

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const solution = read4 => {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return (buf, n) => {
    let eof = false; // end of file flag
    let total = 0; // total bytes have read
    const buffer = Array(4); // temp buffer

    while (!eof && total < n) {
      const size = read4(buffer);

      // Check if it's the end of the file
      eof = size < 4;

      // Get the actual count
      const count = Math.min(size, n - total);

      // Copy from temp buffer to buf
      for (let i = 0; i < count; i++) {
        buf[total++] = buffer[i];
      }
    }

    return total;
  };
};

export { solution };
