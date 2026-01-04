class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(1);
  }

  find = (x) => {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  };

  union = (x, y) => {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  };

  connected = (x, y) => {
    return this.find(x) === this.find(y);
  };
}

const uf = new UnionFind(5);

uf.union(0, 1);
uf.union(1, 2);

console.log(uf.connected(0, 2)); // true
console.log(uf.connected(3, 4)); // false

uf.union(3, 4);
console.log(uf.connected(3, 4)); // true
