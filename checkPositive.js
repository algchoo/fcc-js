function checkPositive(arr) {
  return arr.every((num) => {
    return num > 0
  })
}
console.log(checkPositive([1, 2, 3, -4, 5]))
