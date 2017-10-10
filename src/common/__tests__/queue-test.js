import { assert } from 'chai';
import Queue from '../queue';

describe('Queue', () => {
  it('should create an empty queue', () => {
    const queue = new Queue();
    assert.equal(queue.size(), 0);
    assert.ok(queue.isEmpty());
  });

  it('should have two items', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.size(), 2);
  });

  it('should have one item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    assert.equal(queue.size(), 1);
  });

  it('should return the element on top of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.first(), 1);
  });

  it('should return undefined when peaking from empty queue', () => {
    const queue = new Queue();
    assert.equal(queue.first(), undefined);
  });

  it('should return undefined when poping from empty queue', () => {
    const queue = new Queue();
    assert.equal(queue.dequeue(), undefined);
  });
});
