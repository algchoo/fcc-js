function confirmEnding(str, target) {
    let endOfString = str.substring(str.length, str.length-target.length)
    return endOfString === target ? true : false
  }