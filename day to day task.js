function descendingOrder(num) {
    // Convert the number to an array of digits
    let digits = Array.from(num.toString()).map(Number);
    
    // Sort the array in descending order
    digits.sort((a, b) => b - a);
    
    // Convert the sorted array back to a number
    let result = parseInt(digits.join(''));
    
    return result;
  }
  console.log(descendingOrder(42145)); // Output: 54421
  console.log(descendingOrder(145263)); // Output: 654321
  console.log(descendingOrder(123456789)); // Output: 987654321
  
//   const sales = 12.2;
// console.log(parseInt(sales));


function sumDigits() {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);

    }
    return sum+=sum;
  }
  let num = 123456;
console.log(sumDigits(num)); // Output: 21

function digitalRoot(n) {
    while (n > 9) {
      let sum = 0;
      while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
      }
      n = sum;
    }
    return n;
  }
console.log(digitalRoot(132189));


// task-3
function sumTwoSmallestNumbers(numbers=[10, 343445353, 3453445, 3453545353453]) {
    // Sort the input array in ascending order
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    // Return the sum of the first two elements
    return numbers[0] + numbers[1];
  }
 console.log(sumTwoSmallestNumbers());


 const arr = [1,2,3,4,5]
 console.log('(' + arr.slice(0,3)+')')


//  function m1(a,s){
//   return a+s;
//  }
//  console.log(m1(1,1))

// function b(s=[2,3,4]){
//   d=0;
//   for(let i=0; i<s.length; i++){
//     d+=s[i];
//   }
//   return d;
// }
// console.log(b());


// DAY === 09/05/2023 ============

function countBits(n) {
  // convert integer to binary string
  let binary = n.toString(2);
  // count number of '1's in binary string
  let count = (binary.match(/1/g) || []).length;
  // return count
  return count;
}

console.log(countBits(1234)); // Output: 5
console.log(countBits(0));    // Output: 0
console.log(countBits(1));    // Output: 1
console.log(countBits(2));    // Output: 1
console.log(countBits(3));    // Output: 2

// var countBits = function(n) {
//   return n.toString(2).replace(/0/g,'').length;
// };


// ===A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

    // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function isNarcissisticNumber(number) {
  // convert number to string to count digits
  let digits = number.toString().split('');
  let n = digits.length;

  // calculate sum of digits raised to power n
  let total = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), n), 0);

  // check if sum is equal to original number
  return total === number;
}

console.log(isNarcissisticNumber(153)); // Output: true
console.log(isNarcissisticNumber(1634)); // Output: true
console.log(isNarcissisticNumber(9474)); // Output: true
console.log(isNarcissisticNumber(9475)); // Output: false
console.log(isNarcissisticNumber(9473)); // Output: false


// In this kata you will create a function that takes a list of non-negative
//  integers and strings and returns a new list with the strings filtered out.

// Example :===
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filterList(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      result.push(list[i]);
    }
  }
  return result;
}
console.log(filterList([1,2,'a','b',2,-9])); // Output: [1,2]
console.log(filterList([1,'a','b',0,15])); // Output: [1,0,15a
console.log(filterList([1,2,'aasf','1','123',123])); // Output: [1,2,123]

// Q2?

function findOutlier(integers) {
  let even = [];
  let odd = [];
  
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }
  
  return even.length === 1 ? even[0] : odd[0];
}
 console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // out put (the only odd number)
 console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // out put (the only even number)

//  Q?3Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible,
//  containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const combined = s1.concat(s2); // concatenate both strings
  const uniqueChars = new Set(combined); // use Set to filter out duplicates
  const sortedChars = Array.from(uniqueChars).sort(); // convert Set back to array and sort
  return sortedChars.join(""); // join array back to string and return
}
const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(longest(a, b)); // "abcdefklmopqwxy"

const c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(c, c)); // "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   // your code
//   s3 = s1 + s2;
//   s4 = s3.split("");
//   s4 = s4.sort().filter(function(element, index, array){
//     return element !== array[index - 1];
//   });
//   return s4.join("");
// }



// Day == 10-05-2023
let n = 100;
console.log(n.toString().length);

// Numerical encoder 
// ====================
// function solution(number){
//   let row = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
//   output = ""
//   for (let i in row){
//     while(number >= row[i]){
//       output += i
//       number += row[i]
//     }
//   }
//   return output
//   // console.log(output);/
// }
// solution(1000);


function solution(number) {
  if (number < 1 || number > 3999) {
    console.log("Invalid input. Please provide a positive integer between 1 and 3999."); 
    return ;
  }
  const romanSymbols = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let result = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    

    while (number >= romanSymbols[i].value) {
      result +=romanSymbols[i].symbol;
      number -= romanSymbols[i].value;
    }
   
  }
  // return result;
  console.log(result);
}
solution(2500);

// Q?2
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
//  the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(sentence) {
  // Convert the sentence to lowercase and remove non-alphabetic characters
  const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');

  // Create a Set to store unique letters
  const letters = new Set();

  // Iterate through each character in the cleaned sentence
  for (let i = 0; i < cleanedSentence.length; i++) {
    const letter = cleanedSentence[i];
    letters.add(letter);
  }

  // Check if the Set contains all 26 letters
  
}

// or 
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }



// find missing letters in an array 

function findMissingLetter(input){
  let alphabet = ['a','b','c','d','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const first = input[0];

  if(first === first.toUpperCase()){
    alphabet = alphabet.join('').toUpperCase().split('')
  }

  const a_first = alphabet.indexOf(first);
  alphabet  = alphabet.splice(a_first, input.length +1)
  for(let i =0; i<alphabet.length; i++){
    if(input.indexOf(alphabet[i])== -1){
      return alphabet[i]
    }
    
  }
}
console.log(findMissingLetter(['a','b','d']));