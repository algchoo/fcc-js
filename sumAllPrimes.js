function sumPrimes(num) {
  let result = 0
  for(let i = 0; i <= num; i++)
    if(isPrime(i)) result += i;
  console.log(result)
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

sumPrimes(10)
sumPrimes(977)