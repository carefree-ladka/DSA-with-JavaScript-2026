export class TrieNode {
  children = {};
  isEnd = false;
}

class Trie {
  root = new TrieNode();

  insert = (word) => {
    let current = this.root;

    for (const char of word) {
      current = current.children[char] ??= new TrieNode();
    }

    current.isEnd = true;
  };

  search = (prefix) => {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children[char]) return null;
      current = current.children[char];
    }

    return current;
  };

  startsWith = (prefix) => {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }

    return true;
  };

  autocomplete = (prefix) => {
    const result = [];

    const node = this.search(prefix) ?? null;

    if (!node) return result;

    const dfs = (node, prefix) => {
      if (node.isEnd) result.push(prefix);

      for (const char in node.children) {
        dfs(node.children[char], prefix + char);
      }
    };

    dfs(node, prefix);

    return result;
  };
}

const trie = new Trie();

[
  "app",
  "apple",
  "ban",
  "kiwi",
  "application",
  "apps",
  "race",
  "banana",
].forEach((word) => trie.insert(word));

// console.log(trie.search("ban"));
// console.log(trie.search("banana"));
console.log(trie.autocomplete("app")); // [ 'app', 'apple', 'application', 'apps' ]
