/**
 * LFU Cache
 *
 * Design and implement a data structure for Least Frequently Used (LFU) cache.
 * It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 *
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity,
 *
 * it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem,
 * when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 *
 * LFUCache cache = new LFUCache( 2 // capacity // );
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.get(3);       // returns 3.
 * cache.put(4, 4);    // evicts key 1.
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 */

class DataNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
    this.frequentNode = null;
  }
}

class FrequentNode {
  constructor(frequent = -1) {
    this.frequent = frequent;
    this.dataList = new DataList();
  }
}

class DoublyLinkedList {
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insertHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  insertTail(node) {
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  insertBefore(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    node.prev.next = newNode;
    node.prev = newNode;
  }

  isEmpty() {
    return this.head.next === this.tail;
  }

  getLast() {
    return this.tail.prev;
  }
}

class FrequentList extends DoublyLinkedList {
  constructor() {
    super();
    this.head = new FrequentNode();
    this.tail = new FrequentNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  promote(dataNode) {
    const frequentNode = dataNode.frequentNode;
    frequentNode.dataList.remove(dataNode);

    if (frequentNode.prev.frequent !== frequentNode.frequent + 1) {
      const newFrequentNode = new FrequentNode(frequentNode.frequent + 1);
      this.insertBefore(frequentNode, newFrequentNode);
    }

    frequentNode.prev.dataList.insertHead(dataNode);
    dataNode.frequentNode = frequentNode.prev;

    if (frequentNode.dataList.isEmpty()) {
      this.remove(frequentNode);
    }
  }

  removeDataNode(dataNode) {
    dataNode.frequentNode.dataList.remove(dataNode);
    if (dataNode.frequentNode.dataList.isEmpty()) {
      this.remove(dataNode.frequentNode);
    }
  }
}

class DataList extends DoublyLinkedList {
  constructor() {
    super();
    this.head = new DataNode();
    this.tail = new DataNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}

/**
 * @param {number} capacity
 */
class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Hashmap
    this.map = new Map();
    // Frequent list
    this.frequentList = new FrequentList();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const dataNode = this.map.get(key);
    this.frequentList.promote(dataNode);
    return dataNode.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.capacity === 0) {
      return;
    }

    let dataNode;
    let frequentNode;

    if (this.map.has(key)) {
      dataNode = this.map.get(key);
      dataNode.value = value;
      this.frequentList.promote(dataNode);
      return;
    }

    if (this.map.size === this.capacity) {
      frequentNode = this.frequentList.getLast();
      dataNode = frequentNode.dataList.getLast();
      this.map.delete(dataNode.key);
      this.frequentList.removeDataNode(dataNode);
    }

    dataNode = new DataNode(key, value);
    this.map.set(key, dataNode);

    if (this.frequentList.getLast().frequent !== 0) {
      this.frequentList.insertTail(new FrequentNode(0));
    }

    this.frequentList.getLast().dataList.insertHead(dataNode);
    dataNode.frequentNode = this.frequentList.getLast();
  }
}

export { LFUCache };
