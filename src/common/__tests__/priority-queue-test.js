import { assert } from 'chai';
import PriorityQueue from '../priority-queue';

describe('Priority Queue', () => {
  it('should create a priority queue with default comparator', () => {
    const pq = new PriorityQueue();
    pq.offer(2);
    pq.offer(1);
    assert.equal(pq.poll(), 1);
    assert.equal(pq.poll(), 2);
  });

  it('should use the specified comparator', () => {
    const pq = new PriorityQueue({ comparator: (a, b) => b - a });
    pq.offer(2);
    pq.offer(1);
    assert.equal(pq.poll(), 2);
    assert.equal(pq.poll(), 1);
  });

  it('should throw empty queue error when peeking empty queue', () => {
    const pq = new PriorityQueue();
    assert.equal(pq.peek(), null);
  });

  it('should return the first element', () => {
    const pq = new PriorityQueue({ initialValues: [3, 1, 2] });
    assert.equal(pq.peek(), 1);
  });

  it('should return the first element', () => {
    const pq = new PriorityQueue({ comparator: (a, b) => b - a, initialValues: [3, 1, 2] });
    assert.equal(pq.peek(), 3);
  });

  it('should offer new value and bubble up', () => {
    const pq = new PriorityQueue({ initialValues: [3, 1, 2] });
    pq.offer(0);
    assert.equal(pq.peek(), 0);
  });

  it('should offer new value and bubble up', () => {
    const pq = new PriorityQueue({ comparator: (a, b) => b - a, initialValues: [3, 1, 2] });
    pq.offer(4);
    assert.equal(pq.peek(), 4);
  });

  it('should throw empty queue error when polling empty queue', () => {
    const pq = new PriorityQueue();
    assert.equal(pq.poll(), null);
  });

  it('should poll the data and bubble down the queue', () => {
    const pq = new PriorityQueue({ initialValues: [3, 1, 2] });
    pq.poll();
    assert.equal(pq.peek(), 2);
  });

  it('should clear the queue', () => {
    const pq = new PriorityQueue({ initialValues: [3, 1, 2] });
    assert.equal(pq.size(), 3);
    pq.clear();
    assert.equal(pq.size(), 0);
  });

  it('should return the array of the queue', () => {
    const pq = new PriorityQueue({ initialValues: [3, 1, 2] });
    assert.deepEqual(pq.toArray(), [1, 2, 3]);
  });

  it('should return the array of the queue with specified comparator', () => {
    const pq = new PriorityQueue({ comparator: (a, b) => b - a, initialValues: [3, 1, 2] });
    assert.deepEqual(pq.toArray(), [3, 2, 1]);
  });
});
