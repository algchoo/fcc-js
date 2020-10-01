function pairElement(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  // Split the string into an array
  let arr = str.split("")

  // Map function op
  return arr.map(x => [x, pairs[x]])
}

pairElement("GCG")