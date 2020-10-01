function destroyer(arr) {
  const ARGS = Array.prototype.slice.call(arguments)
  const SEEK = ARGS.slice(1, ARGS.length)

  return arr.filter(e => SEEK.includes(e) === false)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
console.log(destroyer([2, 3, 2, 3], 2, 3))