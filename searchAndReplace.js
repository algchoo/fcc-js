function myReplace(str, before, after) {

  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase().concat(after.substring(1))
    return str.replace(before, after)
  } else {
    after = after.charAt(0).toLowerCase().concat(after.substring(1))
    return str.replace(before, after)
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("I think we should look up there", "up", "Down")
myReplace("His name is Tom", "Tom", "john")
myReplace("Let us get back to more Coding", "Coding", "algorithms")