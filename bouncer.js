function bouncer(arr) {
    return arr.filter(element => !!element === true)
  }
  
  console.log(bouncer([7, "ate", "", false, 9]))