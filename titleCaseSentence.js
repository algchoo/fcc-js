function titleCase(str) {
    let strArr = Array.from(str.split(" "))
    let upperCaseStrArr = []
    let newStr = ''
    strArr.forEach(word => {
        upperCaseStrArr.push(word[0].toUpperCase() + word.slice(1, word.length).toLowerCase())
    })
    return upperCaseStrArr.toString().replace(/,/g, ' ')
}
  
  console.log(titleCase("I'm a little tea pot"))
  console.log(titleCase("sHoRt AnD sToUt"))
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))