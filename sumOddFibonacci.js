function sumFibs(num) {
  let arr = [1, 1]
  let next = 0
  while ((next = arr[0] + arr[1]) <= num) {
    arr.unshift(next)
  }

  const reducer = (accumulator, currentVal) => accumulator + currentVal
  return arr.filter(e => e % 2 != 0).reduce(reducer)
}

sumFibs(1)
sumFibs(4)
sumFibs(1000)
sumFibs(4000000)
sumFibs(75024)
sumFibs(75025)