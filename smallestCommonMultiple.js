function smallestCommons(arr) {
  if (arr[0] > arr[1]) arr.sort()

  // range
  let [min, max] = arr
  let currentLCM = min

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min)
  }

  console.log(currentLCM)
}

const lcm = (a, b) => (a * b) / gcd(a, b)

const gcd = (x, y) => {
  if (y === 0) return x
  else return gcd(y, x % y)
}

smallestCommons([1, 3])
smallestCommons([1, 5])
smallestCommons([5, 1])
smallestCommons([2, 10])
smallestCommons([1, 13])
smallestCommons([23, 18])