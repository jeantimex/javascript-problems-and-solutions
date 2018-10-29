/**
 * Sort a stack using a temporary stack
 *
 * Given a stack of integers, sort it in ascending order using another temporary stack.
 * Output : [1, 2, 3, 4, 5, 8]
 *
 * Here is a dry run of above pseudo code.
 *
 * input: [34, 3, 31, 98, 92, 23]
 *
 * Element taken out: 23
 * input: [34, 3, 31, 98, 92]
 * tmpStack: [23]
 *
 * Element taken out: 92
 * input: [34, 3, 31, 98]
 * tmpStack: [23, 92]
 *
 * Element taken out: 98
 * input: [34, 3, 31]
 * tmpStack: [23, 92, 98]
 *
 * Element taken out: 31
 * input: [34, 3, 98, 92]
 * tmpStack: [23, 31]
 *
 * Element taken out: 92
 * input: [34, 3, 98]
 * tmpStack: [23, 31, 92]
 *
 * Element taken out: 98
 * input: [34, 3]
 * tmpStack: [23, 31, 92, 98]
 *
 * Element taken out: 3
 * input: [34, 98, 92, 31, 23]
 * tmpStack: [3]
 *
 * Element taken out: 23
 * input: [34, 98, 92, 31]
 * tmpStack: [3, 23]
 *
 * Element taken out: 31
 * input: [34, 98, 92]
 * tmpStack: [3, 23, 31]
 *
 * Element taken out: 92
 * input: [34, 98]
 * tmpStack: [3, 23, 31, 92]
 *
 * Element taken out: 98
 * input: [34]
 * tmpStack: [3, 23, 31, 92, 98]
 *
 * Element taken out: 34
 * input: [98, 92]
 * tmpStack: [3, 23, 31, 34]
 *
 * Element taken out: 92
 * input: [98]
 * tmpStack: [3, 23, 31, 34, 92]
 *
 * Element taken out: 98
 * input: []
 * tmpStack: [3, 23, 31, 34, 92, 98]
 *
 * final sorted list: [3, 23, 31, 34, 92, 98]
 */

import Stack from 'common/stack';

/**
 * @param {Stack} input
 * @return {Stack}
 */
const sortStack = input => {
  const tmpStack = new Stack();

  while (!input.isEmpty()) {
    // pop out the first element
    const tmp = input.pop();

    // while temporary stack is not empty and
    // top of stack is greater than temp
    while (!tmpStack.isEmpty() && tmpStack.peek() > tmp) {
      // pop from temporary stack and
      // push it to the input stack
      input.push(tmpStack.pop());
    }

    // push temp in tempory of stack
    tmpStack.push(tmp);
  }

  return tmpStack;
};

export { sortStack };
