class Codec {
  static encode = (strs = []) => {
    return strs.map((str) => `${str.length}#${str}`).join("");
  };

  static decode = (data) => {
    const result = [];
    let i = 0;

    while (i < data.length) {
      let j = i;
      while (data[j] !== "#") {
        j++;
      }
      const length = Number(data.slice(i, j));
      const end = j + 1 + length;
      result.push(data.slice(j + 1, end));
      i = end;
    }

    return result;
  };
}

// Test Cases:
console.log(Codec.decode(Codec.encode(["ab", "c#d", ""]))); // [ 'ab', 'c#d', '' ]
console.log(Codec.decode(Codec.encode(["Hello", "World"]))); // [ 'Hello', 'World' ]
