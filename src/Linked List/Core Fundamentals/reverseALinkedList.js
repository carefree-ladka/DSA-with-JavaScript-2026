import { ListNode } from "../ListNode.js";

const reverseALinkedList = (head) => {
  let current = head;
  let prev = null;

  while (current !== null) {
    const nxt = current.next;
    current.next = prev;
    prev = current;
    current = nxt;
  }

  return prev;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseALinkedList(head)); // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null
