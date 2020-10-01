function fearNotLetter(str) {
  let range = str.length

  for (let i = 0; i < range - 1; i++) {
    let code = str.charCodeAt(i)
    if ((code+1) != str.charCodeAt(i+1)) {
      return String.fromCharCode(code+1)
    } else {
      continue
    }
  }

  return undefined
}

fearNotLetter("abce")
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
fearNotLetter("bcdf")
fearNotLetter("abcdefghijklmnopqrstuvwxyz")