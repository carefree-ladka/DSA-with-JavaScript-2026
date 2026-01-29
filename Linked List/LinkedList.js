import { ListNode } from "./ListNode.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add at end → O(n)
  push = (value) => {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }

    this.size++;
    return this;
  };

  // Remove from end → O(n)
  pop = () => {
    if (!this.head) return null;

    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }

    let prev = null;
    let curr = this.head;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    this.size--;
    return curr.value;
  };

  // Add at start → O(1)
  unshift = (value) => {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  };

  // Remove from start → O(1)
  shift = () => {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  };

  // Add at middle (after ⌊size/2⌋) → O(n)
  addAtMiddle = (value) => {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return this;
    }

    let mid = Math.floor(this.size / 2);
    let curr = this.head;

    for (let i = 0; i < mid - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
    return this;
  };
}

const ll = new LinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.unshift(0); // 0 → 1 → 2 → 3
ll.addAtMiddle(99); // 0 → 1 → 99 → 2 → 3
ll.pop(); // removes 3
ll.shift(); // removes 0
