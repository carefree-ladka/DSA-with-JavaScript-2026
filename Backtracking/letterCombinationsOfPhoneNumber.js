// Letter Combinations of a Phone Number
// Time: O(4^n), Space: O(n)

function letterCombinations(digits) {
  if (!digits) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];

  function backtrack(i, path) {
    if (i === digits.length) {
      result.push(path);
      return;
    }

    for (let char of map[digits[i]]) {
      backtrack(i + 1, path + char);
    }
  }

  backtrack(0, "");
  return result;
}

// Test
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
