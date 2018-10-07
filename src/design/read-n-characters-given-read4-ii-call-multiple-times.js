/**
 * Read N Characters Given Read4 II - Call multiple times
 *
 * The API: int read4(char *buf) reads 4 characters at a time from a file.
 *
 * The return value is the actual number of characters read. For example, it returns 3 if there is only 3
 * characters left in the file.
 *
 * By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from
 * the file.
 *
 * Note:
 * The read function may be called multiple times.
 *
 * Example 1:
 *
 * Given buf = "abc"
 * read("abc", 1) // returns "a"
 * read("abc", 2); // returns "bc"
 * read("abc", 1); // returns ""
 *
 * Example 2:
 *
 * Given buf = "abc"
 * read("abc", 4) // returns "abc"
 * read("abc", 1); // returns ""
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
  // a pointer in the buffer
  let ptr = 0;
  // how many left in the buffer after last call
  let left = 0;
  // as read() can be called multiple times
  // we should only allocate the buffer once
  const buffer = Array(4);

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return (buf, n) => {
    // end of file flag
    let eof = false;
    // total bytes have been read this time
    let total = 0;

    while (!eof && total < n) {
      // if we still have some leftovers, use them
      // otherwise we read another 4 chars
      const size = left > 0 ? left : read4(buffer);

      // check if it's the end of the file
      eof = left === 0 && size < 4;

      // get the actual count we are going to read
      const count = Math.min(size, n - total);

      // update the count of leftovers
      left = size - count;

      // copy
      for (let i = 0; i < count; i++) {
        buf[total++] = buffer[ptr + i];
      }

      // update the pointer
      ptr = (ptr + count) % 4;
    }

    return total;
  };
};

export { solution };
