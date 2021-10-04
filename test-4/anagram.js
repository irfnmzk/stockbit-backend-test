const data = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function findAnagram(arr) {
  const result = {};

  for (const word of arr) {
    const sorted = Array.from(word).sort().join("");

    if (!result[sorted]) {
      result[sorted] = [word];
    } else {
      result[sorted].push(word);
    }
  }

  return Object.values(result);
}

const result = findAnagram(data);
console.log(result)
