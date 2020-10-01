// function mixedNumbers(arr) {
//   arr.push(7, 'VIII', 9)
//   arr.unshift('I', 2, 'three')
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));

function filteredArray(arr, elem) {
  return arr.filter(subArr => !subArr.includes(elem))
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 13));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
