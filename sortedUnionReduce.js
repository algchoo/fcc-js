function uniteUnique(arr) {
  // Array holding all arguments after the first array being passed in
  let flat = [...arguments].reduce(
    (acc, curr) => acc.concat(curr.filter(e => !acc.includes(e)))
  )

  return flat
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
uniteUnique([1, 2, 3], [5, 2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])