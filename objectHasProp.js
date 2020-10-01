let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// function isEveryoneHere(obj) {
//   let keys = ['Alan','Jeff','Sarah','Ryan']
//   let results = []
//   keys.forEach(key => { 
//     !obj.hasOwnProperty(key) ? results.push(false) : results.push(true)
//   })
//   return results.includes(false) ? false : true
// }

function isEveryoneHere(obj) {
  return ['Alan','Jeff','Sarah','Ryan'].every(name => obj.hasOwnProperty(name))
}

console.log(isEveryoneHere(users));