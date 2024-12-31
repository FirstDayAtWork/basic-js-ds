const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = new ListNode();
    this.targetNode = this.queue;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.targetNode.value) {
      this.targetNode.value = value;
    } else {
      this.targetNode.next = new ListNode(value);
      this.targetNode = this.targetNode.next;
    }
    this.targetNode.next = null;
  }

  dequeue() {
    this.targetNode = this.queue;
    const value = this.targetNode.value;
    this.queue = this.targetNode.next;
    return value;
  }
}

module.exports = {
  Queue
};
