function countLetters(str) {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

const letterCounts = countLetters("Pranav");

console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }
