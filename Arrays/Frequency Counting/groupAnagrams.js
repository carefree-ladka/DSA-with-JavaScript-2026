// Group Anagrams - LeetCode #49
// Pattern: Frequency Counting as Key

function groupAnagrams(strs) {
  const groups = new Map();

  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

// Alternative with frequency array
function groupAnagramsFreq(strs) {
  const groups = new Map();

  for (let str of strs) {
    const freq = new Array(26).fill(0);
    for (let char of str) {
      freq[char.charCodeAt(0) - 97]++;
    }
    const key = freq.join(",");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

// Test Cases
function runTests() {
  console.log("Group Anagrams Tests:");
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupAnagrams([""])); // [[""]]
  console.log(groupAnagrams(["a"])); // [["a"]]
}

runTests();
