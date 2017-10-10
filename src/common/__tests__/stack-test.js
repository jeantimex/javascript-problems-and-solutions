import { assert } from 'chai';
import Stack from '../stack';

describe('Stack', () => {
  it('should create an empty stack', () => {
    const stack = new Stack();
    assert.equal(stack.size(), 0);
    assert.ok(stack.isEmpty());
  });

  it('should have two items', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    assert.equal(stack.size(), 2);
  });

  it('should have one item', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    assert.equal(stack.size(), 1);
  });

  it('should return the element on top of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    assert.equal(stack.peek(), 2);
  });

  it('should clear the items', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.clear();
    assert.equal(stack.size(), 0);
  });

  it('should return undefined when peaking from empty stack', () => {
    const stack = new Stack();
    assert.equal(stack.peek(), undefined);
  });

  it('should return undefined when poping from empty stack', () => {
    const stack = new Stack();
    assert.equal(stack.pop(), undefined);
  });
});
