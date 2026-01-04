export class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  *[Symbol.iterator]() {
    let current = this;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  toArray() {
    return [...this];
  }

  print() {
    console.log(this.toString());
  }
}
