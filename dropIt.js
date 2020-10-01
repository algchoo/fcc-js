function dropElements(arr, func) {
  if (arr.length == 1 && !func(arr[0])) return []
  if (func(arr[0])) {
    return arr 
  }
  else {
    arr.shift()
    return dropElements(arr, func)
  }
}

dropElements([1, 2, 3], function(n) {return n < 3;})
dropElements([0, 1, 0, 1], function(n) {return n === 1;})
dropElements([1, 2, 3], function(n) {return n > 0;})
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})