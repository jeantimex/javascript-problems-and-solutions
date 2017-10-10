/**
 * Queue data structure.
 */
let items = [];

export default class Queue {
  constructor() {
    items = [];
  }

  /**
   * Add new element to the queue
   * @param {*} element
   */
  enqueue(element) {
    items.push(element);
  }

  /**
   * Removed the first item in the queue
   * @returns {*} The first item in the queue
   */
  dequeue() {
    return items.shift();
  }

  /**
   * Returns the first item in the queue
   * @returns {*} The first item in the queue
   */
  first() {
    return items[0];
  }

  /**
   * Checks if the queue is empty
   */
  isEmpty() {
    return items.length === 0;
  }

  /**
   * Returns the number of items in the queue
   */
  size() {
    return items.length;
  }
}
