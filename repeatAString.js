function repeatStringNumTimes(str, num) {
    let repeat = ''
    while (num != 0) {
        repeat = repeat.concat(str)
        num--
    }
    return repeat
  }
  
  console.log(repeatStringNumTimes("abc", 3))
  