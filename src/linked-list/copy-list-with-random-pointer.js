/**
 * Copy List with Random Pointer
 *
 * A linked list is given such that each node contains an additional random pointer
 * which could point to any node in the list or null.
 *
 * Return a deep copy of the list.
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
const copyRandomList = head => {
  if (!head) {
    return null;
  }

  const map = new Map();

  // Step 1. Copy all the nodes
  let p = head;
  while (p) {
    map.set(p, new RandomListNode(p.label));
    p = p.next;
  }

  // Step 2. Copy the next and random pointers
  p = head;
  while (p) {
    if (p.next) map.get(p).next = map.get(p.next);
    if (p.random) map.get(p).random = map.get(p.random);
    p = p.next;
  }

  return map.get(head);
};

export { copyRandomList };
