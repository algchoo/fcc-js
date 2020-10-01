function findLongestWordLength(str) {
  let arrayOfWords = str.split(" ")
  let longest = 0

  arrayOfWords.forEach(word => {
    if (word.length > longest) {
      longest = word.length
    }
  })
  return longest
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));