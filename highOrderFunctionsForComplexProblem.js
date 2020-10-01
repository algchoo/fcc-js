// const squareList = (arr) => {
//   // Only change code below this line
//   return arr.filter(num => num > 0 && Number.isInteger(num)).map(num => Math.pow(num, 2))
//   // Only change code above this line
// };

const squareList = (arr) => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
    ? sqrIntegers.concat(num * num)
    : sqrIntegers
  }, [])
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
