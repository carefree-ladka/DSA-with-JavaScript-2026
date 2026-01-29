// Copy List with Random Pointer
// Time: O(n), Space: O(n)

function copyRandomList(head) {
  if (!head) return null;
  
  const map = new Map();
  let curr = head;
  
  while (curr) {
    map.set(curr, { val: curr.val });
    curr = curr.next;
  }
  
  curr = head;
  while (curr) {
    map.get(curr).next = map.get(curr.next) || null;
    map.get(curr).random = map.get(curr.random) || null;
    curr = curr.next;
  }
  
  return map.get(head);
}

// Test
const node1 = { val: 7, next: null, random: null };
const node2 = { val: 13, next: null, random: null };
node1.next = node2;
node2.random = node1;
console.log(copyRandomList(node1));
