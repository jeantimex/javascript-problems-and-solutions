/**
 * Queue data structure.
 */

export default class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Add new element to the queue
   * @param {*} element
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * Removed the first item in the queue
   * @returns {*} The first item in the queue
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Returns the first item in the queue
   * @returns {*} The first item in the queue
   */
  first() {
    return this.items[0];
  }

  /**
   * Checks if the queue is empty
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the number of items in the queue
   */
  size() {
    return this.items.length;
  }
}
