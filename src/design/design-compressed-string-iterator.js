/**
 * Design Compressed String Iterator
 *
 * Design and implement a data structure for a compressed string iterator.
 * It should support the following operations: next and hasNext.
 *
 * The given compressed string will be in the form of each letter followed by a
 * positive integer representing the number of this letter existing in the original uncompressed string.
 *
 * next() - if the original string still has uncompressed characters, return the next letter;
 * Otherwise return a white space.
 * hasNext() - Judge whether there is any letter needs to be uncompressed.
 *
 * Note:
 * Please remember to RESET your class variables declared in StringIterator,
 * as static/class variables are persisted across multiple test cases. Please see here for more details.
 *
 * Example:
 *
 * StringIterator iterator = new StringIterator("L1e2t1C1o1d1e1");
 *
 * iterator.next(); // return 'L'
 * iterator.next(); // return 'e'
 * iterator.next(); // return 'e'
 * iterator.next(); // return 't'
 * iterator.next(); // return 'C'
 * iterator.next(); // return 'o'
 * iterator.next(); // return 'd'
 * iterator.hasNext(); // return true
 * iterator.next(); // return 'e'
 * iterator.hasNext(); // return false
 * iterator.next(); // return ' '
 *
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

class StringIterator {
  /**
   * @param {string} compressedString
   */
  constructor(compressedString) {
    this.str = compressedString;
    this.index = 0;
    this.updateCount();
  }

  updateIndex() {
    this.index++;
    while (this.index < this.str.length && (this.str[this.index] >= '0' && this.str[this.index] <= '9')) {
      this.index++;
    }
  }

  updateCount() {
    this.count = 0;

    let i = this.index + 1;
    while (i < this.str.length && this.str[i] >= '0' && this.str[i] <= '9') {
      this.count = this.count * 10 + (this.str[i++] - '0');
    }
  }

  /**
   * @return {character}
   */
  next() {
    if (!this.hasNext()) {
      return ' ';
    }

    const char = this.str[this.index];
    this.count--;

    if (this.count === 0) {
      this.updateIndex();
      this.updateCount();
    }

    return char;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.count > 0;
  }
}

export { StringIterator };
