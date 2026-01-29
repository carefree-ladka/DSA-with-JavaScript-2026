const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const counter = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt(0) - 97]++;
    counter[t[i].charCodeAt(0) - 97]--;
  }

  return counter.every((count) => count === 0);
};

// Test Cases:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
