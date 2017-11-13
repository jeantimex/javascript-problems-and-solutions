/**
 * Linked List Utilities
 */

import ListNode from 'common/list-node';

const isNumeric = n => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 *
 * @param {ListNode} node
 * @return {string}
 */
export const serializeLinkedList = node => {
  if (!node) {
    return '';
  }

  let data = [];

  while (node) {
    data.push(node.val);
    node = node.next;
  }

  return data.join(',');
};

/**
 *
 * @param {string} data
 * @return {ListNode}
 */
export const deserializeLinkedList = data => {
  if (!data) {
    return null;
  }

  const f = new ListNode();
  let p = f;

  data.split(',').forEach(val => {
    if (isNumeric(val)) {
      val = Number(val);
    }
    p.next = new ListNode(val);
    p = p.next;
  });

  return f.next;
};
