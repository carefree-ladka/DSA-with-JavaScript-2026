// Implement Trie (Prefix Tree)
// Time: O(n) for all operations, Space: O(n)

class Trie {
  constructor() {
    this.root = {};
  }
  
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isEnd = true;
  }
  
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) return false;
      node = node[char];
    }
    return node.isEnd === true;
  }
  
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node[char]) return false;
      node = node[char];
    }
    return true;
  }
}

// Test
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
