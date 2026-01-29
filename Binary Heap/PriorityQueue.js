/**
 * Generic Priority Queue implementation using a Binary Heap.
 *
 * Supports both Min-Heap and Max-Heap behavior via a custom comparator.
 *
 * @template T
 *
 * @example
 * // Min Heap
 * const minPQ = new PriorityQueue((a, b) => a - b);
 * minPQ.offer(3);
 * minPQ.offer(1);
 * minPQ.poll(); // 1
 *
 * @example
 * // Max Heap
 * const maxPQ = new PriorityQueue((a, b) => b - a);
 */
export class PriorityQueue {
  /**
   * Creates a new PriorityQueue.
   *
   * @param {(a: T, b: T) => number} [comparator]
   * Comparator function:
   *  - returns < 0 if `a` has higher priority than `b`
   *  - returns > 0 if `b` has higher priority than `a`
   *  - returns 0 if equal priority
   */
  constructor(comparator = (a, b) => a - b) {
    /** @type {T[]} */
    this.heap = [];

    /** @type {(a: T, b: T) => number} */
    this.compare = comparator;
  }

  /**
   * Returns the number of elements in the priority queue.
   *
   * @returns {number}
   */
  size() {
    return this.heap.length;
  }

  /**
   * Returns the element with the highest priority without removing it.
   *
   * @returns {T | undefined}
   */
  peek() {
    return this.heap[0];
  }

  /**
   * Inserts a new element into the priority queue.
   *
   * Time Complexity: O(log n)
   *
   * @param {T} value
   * @returns {void}
   */
  offer(value) {
    this.heap.push(value);
    this.#heapifyUp(this.size() - 1);
  }

  /**
   * Removes and returns the element with the highest priority.
   *
   * Time Complexity: O(log n)
   *
   * @returns {T | undefined}
   */
  poll() {
    if (this.size() === 0) return undefined;

    this.#swap(0, this.size() - 1);
    const removed = this.heap.pop();
    this.#heapifyDown(0);

    return removed;
  }

  /* ---------- Internal Helpers ---------- */

  /**
   * Returns the parent index of a given index.
   *
   * @param {number} i
   * @returns {number}
   */
  #parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * Returns the left child index of a given index.
   *
   * @param {number} i
   * @returns {number}
   */
  #left(i) {
    return 2 * i + 1;
  }

  /**
   * Returns the right child index of a given index.
   *
   * @param {number} i
   * @returns {number}
   */
  #right(i) {
    return 2 * i + 2;
  }

  /**
   * Swaps two elements in the heap array.
   *
   * @param {number} i
   * @param {number} j
   * @returns {void}
   */
  #swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /**
   * Restores heap property by moving the element at `index` upward.
   *
   * @param {number} index
   * @returns {void}
   */
  #heapifyUp(index) {
    let parent = this.#parent(index);

    while (index > 0 && this.compare(this.heap[index], this.heap[parent]) < 0) {
      this.#swap(index, parent);
      index = parent;
      parent = this.#parent(index);
    }
  }

  /**
   * Restores heap property by moving the element at `index` downward.
   *
   * @param {number} index
   * @returns {void}
   */
  #heapifyDown(index) {
    let smallest = index;

    while (true) {
      const left = this.#left(index);
      const right = this.#right(index);

      if (
        left < this.size() &&
        this.compare(this.heap[left], this.heap[smallest]) < 0
      ) {
        smallest = left;
      }

      if (
        right < this.size() &&
        this.compare(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      this.#swap(index, smallest);
      index = smallest;
    }
  }
}
