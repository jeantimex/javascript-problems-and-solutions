/**
 * Add Two Numbers II
 *
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes
 * first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 *
 * Example:
 *
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  sum() {
    let temp = this.head;
    let total = 0;
    while (temp) {
      total += temp.value;
      temp = temp.next;
    }
    return total;
  }
}

function sumLinkedLists(l1, l2) {
  const totalSum = l1.sum() + l2.sum();
  const resultList = new LinkedList();

  // Convert totalSum to a string, split it into digits, and create nodes
  String(totalSum)
    .split('')
    .map(Number)
    .forEach((digit) => resultList.append(digit));

  return resultList;
}

// Criação das listas l1 e l2
let l1 = new LinkedList();
let l2 = new LinkedList();

const values1 = [7, 2, 4, 3];
const values2 = [5, 6, 4];

values1.forEach((value) => l1.append(value));
values2.forEach((value) => l2.append(value));

// Soma das listas
const result = sumLinkedLists(l1, l2);

// Função para exibir a lista encadeada
function printList(list) {
  let temp = list.head;
  const result = [];
  while (temp) {
    result.push(temp.value);
    temp = temp.next;
  }
  return result.join(' -> ');
}

console.log(printList(result)); // Saída: 7 -> 8 -> 0 -> 7
