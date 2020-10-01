let ohStr1 = "Ohhh no";
let ohStr2 = "Ohhhh no";
let ohStr3 = "Ohhhhh no";
let ohStr4 = "Ohhhhhh no";

let ohRegex = /O(h{2,5})/g; // Our Regex

let result1 = ohRegex.test(ohStr1);
let result2 = ohRegex.test(ohStr2);
let result3 = ohRegex.test(ohStr3);
let result4 = ohRegex.test(ohStr4);

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)