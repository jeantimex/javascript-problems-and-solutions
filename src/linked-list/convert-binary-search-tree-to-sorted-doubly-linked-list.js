/**
 * Convert Binary Search Tree to Sorted Doubly Linked List
 *
 * Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers as synonymous
 * to the previous and next pointers in a doubly-linked list.
 *
 * We want to transform this BST into a circular doubly linked list. Each node in a doubly linked list has a
 * predecessor and successor. For a circular doubly linked list, the predecessor of the first element is the last
 * element, and the successor of the last element is the first element.
 */

// Definition for a Node.
class Node {
  constructor(_val, _left, _right) {
    this.val = _val;
    this.left = _left;
    this.right = _right;
  }
}

const treeToDoublyList = root => {
  const inorder = root => {
    if (!root) {
      return;
    }

    inorder(roo.left);

    prev.right = root;
    root.left = prev;
    prev = root;

    inorder(root.right);
  };

  if (!root) {
    return null;
  }

  // Step 1. Initialize
  const dummy = new Node(0, null, null);
  let prev = dummy;

  // Step 2. Inorder traverse the BST
  inorder(root);

  // Step 3. Connect head and tail
  prev.right = dummy.right;
  dummy.right.left = prev;

  return dummy.right;
};

export { treeToDoublyList };
