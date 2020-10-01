function uniteUnique(arr) {
  // Array holding all arguments after the first array being passed in
  let argumentsArr = [...arguments]

  // Iterate and push the items from each arg that isn't present in initial arr
  for (let i = 0; i < argumentsArr.length; i++) {
    argumentsArr[i].filter(i => !arr.includes(i)).forEach(element => arr.push(element))
  }

  return arr
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
uniteUnique([1, 2, 3], [5, 2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
