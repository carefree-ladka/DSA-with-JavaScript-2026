// Add Two Numbers
// Time: O(max(m, n)), Space: O(max(m, n))

function addTwoNumbers(l1, l2) {
  const dummy = {};
  let curr = dummy,
    carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = { val: sum % 10 };
    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
}

// Test
const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8
