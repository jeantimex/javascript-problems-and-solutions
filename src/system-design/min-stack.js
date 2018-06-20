/**
 * Min Stack
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 * Following is O(1) time complexity and space complexity
 *
 * We define a variable minEle that stores the current minimum element in the stack.
 * Now the interesting part is, how to handle the case when minimum element is removed.
 * To handle this, we push “2x – minEle” into the stack instead of x so that previous
 * minimum element can be retrieved using current minEle and its value stored in stack.
 * Below are detailed steps and explanation of working.
 *
 * Push(x) : Inserts x at the top of stack.
 *
 * If stack is empty, insert x into the stack and make minEle equal to x.
 * If stack is not empty, compare x with minEle. Two cases arise:
 * If x is greater than or equal to minEle, simply insert x.
 * If x is less than minEle, insert (2*x – minEle) into the stack and make minEle equal to x.
 * For example, let previous minEle was 3. Now we want to insert 2.
 * We update minEle as 2 and insert 2*2 – 3 = 1 into the stack.
 *
 * Pop() : Removes an element from top of stack.
 *
 * Remove element from top. Let the removed element be y. Two cases arise:
 * If y is greater than or equal to minEle, the minimum element in the stack is still minEle.
 * If y is less than minEle, the minimum element now becomes (2*minEle – y),
 * so update (minEle = 2*minEle – y). This is where we retrieve previous minimum from
 * current minimum and its value in stack. For example, let the element to be removed be 1 and minEle be 2.
 * We remove 1 and update minEle as 2*2 – 1 = 3.
 * Important Points:
 *
 * Stack doesn’t hold actual value of an element if it is minimum so far.
 * Actual minimum element is always stored in minEle
 *
 * How does this approach work?
 * When element to be inserted is less than minEle, we insert “2x – minEle”.
 * The important thing to notes is, 2x – minEle will always be less than x (proved below),
 * i.e., new minEle and while popping out this element we will see that something unusual has happened as
 * the popped element is less than the minEle. So we will be updating minEle.
 *
 * How 2*x - minEle is less than x in push()?
 * x < minEle which means x - minEle < 0
 *
 * // Adding x on both sides
 * x - minEle + x < 0 + x
 *
 * 2*x - minEle < x
 *
 * We can conclude 2*x - minEle < new minEle
 * While popping out, if we find the element(y) less than the current minEle, we find the new minEle = 2*minEle – y.
 *
 * How previous minimum element, prevMinEle is, 2*minEle - y
 * in pop() is y the popped element?
 *
 *  // We pushed y as 2x - prevMinEle. Here
 *  // prevMinEle is minEle before y was inserted
 *  y = 2*x - prevMinEle
 *
 *  // Value of minEle was made equal to x
 *  minEle = x .
 *
 *  new minEle = 2 * minEle - y
 *             = 2*x - (2*x - prevMinEle)
 *             = prevMinEle // This is what we wanted
 *
 * Exercise:
 * Similar approach can be used to find the maximum element as well.
 * Implement a stack that supports getMax() in O(1) time and constant extra space.
 */

/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.min = x;
      return;
    }

    if (x < this.min) {
      // x - this.min < 0
      // 2x - this.min < x
      // so 2x - this.min < new min
      this.stack.push(2 * x - this.min);
      this.min = x;
    } else {
      this.stack.push(x);
    }
  }

  /**
   * @return {number}
   */
  pop() {
    const x = this.stack.pop();

    if (x < this.min) {
      const result = this.min;
      this.min = 2 * this.min - x;
      return result;
    }

    if (this.stack.length === 0) {
      this.min = null;
    }

    return x;
  }

  /**
   * @return {number}
   */
  top() {
    const x = this.stack[this.stack.length - 1];

    if (x < this.min) {
      return this.min;
    }

    return x;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
