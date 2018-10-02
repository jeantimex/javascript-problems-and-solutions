/**
 * Find the Celebrity
 *
 * Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity.
 * The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.
 *
 * Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do
 * is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the
 * celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).
 *
 * You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int
 * findCelebrity(n), your function should minimize the number of calls to knows.
 *
 * Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a
 * celebrity in the party. If there is no celebrity, return -1.
 */

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
const solution = knows => {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return n => {
    // base case
    if (n <= 0) return -1;
    if (n == 1) return 0;

    const stack = [];

    // put all people to the stack
    for (let i = 0; i < n; i++) {
      stack.push(i);
    }

    let a = 0;
    let b = 0;

    while (stack.length >= 2) {
      a = stack.pop();
      b = stack.pop();

      if (knows(a, b)) {
        // a knows b, so a is not the celebrity, but b may be
        stack.push(b);
      } else {
        // a doesn't know b, so b is not the celebrity, but a may be
        stack.push(a);
      }
    }

    // double check the potiential celebrity
    let c = stack.pop();

    for (let i = 0; i < n; i++) {
      // c should not know anyone else
      if (i !== c && (knows(c, i) || !knows(i, c))) {
        return -1;
      }
    }

    return c;
  };
};

export { solution };
