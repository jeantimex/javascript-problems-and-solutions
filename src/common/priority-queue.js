/**
 * Priority Queue
 */

export default class PriorityQueue {
  constructor({ comparator, initialValues }) {
    this.comparator = comparator || ((a, b) => a - b);
    this.data = initialValues ? initialValues.slice(0) : [];
    this.heapify();
  }

  size() {
    return this.data.length;
  }

  heapify() {
    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {
        this.bubbleUp(i);
      }
    }
  }

  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  poll() {
    const result = this.data[0];
    const last = this.data.pop();

    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  peek() {
    return this.data[0];
  }

  clear() {
    this.data = [];
  }

  bubbleUp(pos) {
    while (pos > 0) {
      let parent = (pos - 1) >>> 1;

      if (this.comparator(this.data[pos], this.data[parent]) < 0) {
        const temp = this.data[parent];
        this.data[parent] = this.data[pos];
        this.data[pos] = temp;
        pos = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(pos) {
    const last = this.data.length - 1;

    while (true) {
      let left = (pos << 1) + 1;
      let right = left + 1;
      let minIndex = pos;

      if (left <= last && this.comparator(this.data[left], this.data[minIndex]) < 0) {
        minIndex = left;
      }

      if (right <= last && this.comparator(this.data[right], this.data[minIndex]) < 0) {
        minIndex = right;
      }

      if (minIndex !== pos) {
        const temp = this.data[minIndex];
        this.data[minIndex] = this.data[pos];
        this.data[pos] = temp;
        pos = minIndex;
      } else {
        break;
      }
    }
  }
}
