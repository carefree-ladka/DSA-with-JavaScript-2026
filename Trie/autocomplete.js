// Autocomplete
// Time: O(n) insert, O(p + k) autocomplete, Space: O(n)

class Autocomplete {
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
  
  autocomplete(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node[char]) return [];
      node = node[char];
    }
    
    const results = [];
    
    function dfs(node, path) {
      if (node.isEnd) results.push(prefix + path);
      for (let key in node) {
        if (key !== 'isEnd') dfs(node[key], path + key);
      }
    }
    
    dfs(node, '');
    return results;
  }
}

// Test
const ac = new Autocomplete();
ac.insert("apple");
ac.insert("app");
ac.insert("application");
ac.insert("apply");
console.log(ac.autocomplete("app")); // ["app","apple","application","apply"]
console.log(ac.autocomplete("appl")); // ["apple","application","apply"]
