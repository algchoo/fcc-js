function mutation(arr) {
    let secondStringChars = Array.from(arr[1].toLowerCase())
    let base = arr[0].toLowerCase()
    let missing = 0
    secondStringChars.forEach(char => {
        if (base.includes(char) === false) missing++
    })
    return missing > 0 ? false : true
  }

console.log(mutation(["hello", "hey"]))
console.log(mutation(["hello", "Hello"]))
console.log(mutation(["Mary", "Army"]))
console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["Noel", "Ole"]))