// Design Add and Search Words Data Structure
// Time: O(n) insert, O(26^n) search worst case, Space: O(n)

class WordDictionary {
  constructor() {
    this.root = {};
  }
  
  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isEnd = true;
  }
  
  search(word) {
    function dfs(node, i) {
      if (i === word.length) return node.isEnd === true;
      
      if (word[i] === '.') {
        for (let key in node) {
          if (key !== 'isEnd' && dfs(node[key], i + 1)) return true;
        }
        return false;
      }
      
      if (!node[word[i]]) return false;
      return dfs(node[word[i]], i + 1);
    }
    
    return dfs(this.root, 0);
  }
}

// Test
const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
console.log(dict.search("pad")); // false
console.log(dict.search("bad")); // true
console.log(dict.search(".ad")); // true
console.log(dict.search("b..")); // true
