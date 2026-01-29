// Reverse Nodes in K Group
// Time: O(n), Space: O(1)

function reverseKGroup(head, k) {
  let count = 0, curr = head;
  while (curr && count < k) {
    curr = curr.next;
    count++;
  }
  
  if (count < k) return head;
  
  let prev = null;
  curr = head;
  for (let i = 0; i < k; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  head.next = reverseKGroup(curr, k);
  return prev;
}

// Test
const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(reverseKGroup(list, 2)); // 2 -> 1 -> 4 -> 3 -> 5
