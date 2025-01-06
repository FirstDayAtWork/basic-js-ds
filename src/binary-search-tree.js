const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
    this.targetNode = this.head;
  }
  root() {
    return this.head;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.targetNode = this.head;
      return this;
    }
    if ((data < this.targetNode.data) && this.targetNode.left) {
      this.targetNode = this.targetNode.left;
      this.add(data);
    } else if (data < this.targetNode.data) {
      this.targetNode.left = new Node(data);
      this.targetNode = this.head;
      return this;
    }
    if ((data > this.targetNode.data) && this.targetNode.right) {
      this.targetNode = this.targetNode.right;
      this.add(data);
    } else if (data > this.targetNode.data) {
      this.targetNode.right = new Node(data);
      this.targetNode = this.head;
      return this;
    }
    return this;
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};