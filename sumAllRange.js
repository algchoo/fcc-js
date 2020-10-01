function sumAll(arr) {
  const MIN = Math.min(...arr)
  const MAX = Math.max(...arr)
  let buildFromRange = (size, startFrom) => {
    return [...Array(size).keys()].map(i => i + startFrom)
  }

  let newArr = buildFromRange((MAX - MIN + 1), MIN)
  return newArr.reduce((acc, curr) => acc + curr)
}

console.log(sumAll([1, 4]))
console.log(sumAll([5, 10]))