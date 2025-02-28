const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arr = [];
  let targetNode = l;
  let res = new ListNode();
  while (targetNode !== null) {
      arr.push(targetNode.value);
      targetNode = targetNode.next;
  }
  arr = arr.filter((el) => el !== k);
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      res.value = arr[i];
      res.next = new ListNode();
      targetNode = res.next;
      continue;
    }
    if (i + 1 === arr.length) {
      targetNode.value = arr[i];
      targetNode.next = null;
      continue;
    }
    targetNode.value = arr[i];
    targetNode.next = new ListNode();
    targetNode = targetNode.next;
  }
  return res;
}

module.exports = {
  removeKFromList
};
