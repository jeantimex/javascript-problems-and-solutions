/**
 * Implement a Queue with Fixed-Size Array
 */

class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.front = 0;
    this.rear = capacity - 1;
    this.array = Array(capacity);
  }

  // Queue is full when size becomes equal to the capacity
  isFull() {
    return this.size === this.capacity;
  }

  // Queue is empty when size is 0
  isEmpty() {
    return this.size === 0;
  }

  // Method to add an item to the queue.
  // It changes rear and size
  enqueue(item) {
    if (this.isFull()) {
      return;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.array[this.rear] = item;
    this.size += 1;
  }

  // Method to remove an item from queue.
  // It changes front and size
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty');
    }

    const item = this.array[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size -= 1;

    return item;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty');
    }

    return this.array[this.front];
  }

  rear() {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty');
    }

    return this.array[this.rear];
  }
}

export { Queue };
