/**
 * Max Stack II
 *
 * Design a max stack that supports push, pop, top, peekMax and popMax.
 *
 * 1. push(x) -- Push element x onto stack.
 * 2. pop() -- Remove the element on top of the stack and return it.
 * 3. top() -- Get the element on the top.
 * 4. peekMax() -- Retrieve the maximum element in the stack.
 * 5. popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements,
 *    only remove the top-most one.
 *
 * Example 1:
 *
 * MaxStack stack = new MaxStack();
 * stack.push(5);
 * stack.push(1);
 * stack.push(5);
 * stack.top(); -> 5
 * stack.popMax(); -> 5
 * stack.top(); -> 1
 * stack.peekMax(); -> 5
 * stack.pop(); -> 1
 * stack.top(); -> 5
 *
 * Note:
 * -1e7 <= x <= 1e7
 * Number of operations won't exceed 10000.
 * The last four operations won't be called when stack is empty.
 */

class MaxStack {
  /**
   * initialize your data structure here.
   */
  constructor() {
    this.numStack = [];
    this.maxStack = [];
  }

  pushHelper(x) {
    let max = this.maxStack.length > 0 ? this.maxStack[this.maxStack.length - 1] : -Infinity;
    if (x > max) {
      max = x;
    }
    this.numStack.push(x);
    this.maxStack.push(max);
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.pushHelper(x);
  }

  /**
   * @return {number}
   */
  pop() {
    this.maxStack.pop();
    return this.numStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.numStack[this.numStack.length - 1];
  }

  /**
   * @return {number}
   */
  peekMax() {
    return this.maxStack[this.maxStack.length - 1];
  }

  /**
   * @return {number}
   */
  popMax() {
    const max = this.peekMax();
    const temp = [];

    while (this.numStack[this.numStack.length - 1] !== max) {
      temp.push(this.numStack.pop());
      this.maxStack.pop();
    }

    this.numStack.pop();
    this.maxStack.pop();

    while (temp.length > 0) {
      this.pushHelper(temp.pop());
    }

    return max;
  }
}

export { MaxStack };
