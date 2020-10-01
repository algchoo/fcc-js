function steamrollArray(arr) {
  let flat = [].concat(...arr)
  if (flat.some(Array.isArray)) {
    return steamrollArray(flat)
  } else {
    return flat
  }
}

steamrollArray([1, [2], [3, [[4]]]])