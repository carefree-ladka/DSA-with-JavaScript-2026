// Reverse Linked List
// Time: O(n), Space: O(1)

function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Test
const list = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
console.log(reverseList(list)); // 3 -> 2 -> 1
