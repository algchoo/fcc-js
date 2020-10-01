function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b)
  if (arr.length === 0) return 0
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[arr.length-1]) {
      return arr.length
    }
    if (num === arr[i]) {
      return i
    } else {
      if (num > arr[i] && num < arr[i+1]) {
        return i+1
      }
    }
  }
}

// getIndexToIns([40, 60], 50)
getIndexToIns([3, 10, 5], 3)
getIndexToIns([], 1)
getIndexToIns([10, 20, 30, 40, 50], 30)
getIndexToIns([5, 3, 20, 3])
getIndexToIns([2, 5, 10], 15)
getIndexToIns([], 1)
getIndexToIns([4,2,5,1,3], 3)