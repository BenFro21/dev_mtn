
//warm up 4/4/23
// Write a block of code that will print out the largest value.
// Using the given values as an example, your code should print out 2.
// To verify your code is working properly, try and change the values of x and y.
// As an additional challenge, print out The values are identical. if x and y have the same value.
let maxOfTwo = (x,y) => {
    if( x === y){
        console.log('The values are identical')
    }
    else if(x > y){
      console.log(x)  
    }else {
        console.log(y)
    }
}
// maxOfTwo(5,57)

/////////////////////////////////////////////////////////////////////////////////

// Write a program that counts from 1 to 50 in fizzbuzz fashion.
// To do so, loop from 1 to 50 (inclusive).
//  Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.
// ```js
// let fizzBuzz = (num) => {
//     for( let i=1; i <= num; i++){
//         if ( i % 3 === 0 && i % 5 === 0){
//             console.log('FizzBuzz')
//         }else if (i % 3 === 0){
//             console.log('fizz')
//         }else if (i % 5 === 0){
//             console.log('buzz')
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(50)
// ```


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Starting array
// ```js
// let array = [28, 43, -12, 30, 4, 0, -36]
// // Write your solution below:
// let largest = 0
// let smallest = 0
// for(i = 0; i < array.length; i++){
//     if(array[i] > largest){
//         largest = array[i]
//     }
//     if(array[i] < smallest){
//         smallest = array[i]
//     }
// }
// console.log(largest, smallest)
// ```

////////////////////////////////////////////////////////////////////

// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.
// For example:
// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.


// ```js
// let arrZero = (arr) => {
//     let value = false;
//     for(let i =0; i < arr.length; i++){
//       for(let j=0; j < arr.length; j++){
//         if( i !== j){
//             if(arr[i] + arr[j] === 0){
//                 value = true
//             }
//         }
//       }
//     }
//     return value
// }

// console.log(arrZero([1, 4, 11, 2, 37, -4]))
// console.log(arrZero([0, 21, 33, 6, 0, -9]))
// console.log(arrZero([0, 1, 2, 3, 4, 5]))
// ```
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//Tuesday 4/11

// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)
// You can trust that this function will never be called with n < 0 or n > 10.
// For example:
// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)

// ```js
// numsArr = [];
// let luckNumbers = (n) => {
//     for(let i=0; i < n; i++){
//         let randomNumber = Math.floor(Math.random() * n)
//         numsArr.push(randomNumber)
//     }
//     return numsArr
// }
// console.log(luckNumbers(8))
// ```




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a word, return true if that word contains only unique characters. Return false otherwise.
// For example:
// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:
// hasUniqueChars("Bob")
// // returns true

// ```js
// function hasUniqueChars(word) {
//     const characters = word.split("");
//     const seenCharacters = new Set();
//     for (let i = 0; i < characters.length; i++) {
//       if (seenCharacters.has(characters[i])) {
//         return false;
//       }
//       seenCharacters.add(characters[i]);
//     }
//     return true;
//   }
//   console.log(hasUniqueChars("Monday"));
//   console.log(hasUniqueChars("Moonday"));
//   console.log(hasUniqueChars("Bob")); 
//   ```







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// For example:
// isPalindrom("a")
// // returns true
// isPalindrom("noon")
// // returns true
// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:
// isPalindrom("Racecar")
// // returns false
// isPalindrom("racecar")
// // returns true

// ```js
// let isPalindrom = (str) => {
//     let newStr = str.split('').reverse().join('')
//     console.log(newStr === str)
// }
// ```
// isPalindrom('hello')


// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.
// If the phrase is over half vowels, it should return true:
// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:
// hasMoreVowels('mice')
// // false
// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:
// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:
// hasMoreVowels('Aal')
// // true

// ```js
// let hasMoreVowels = (word) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I','O', 'U']
//     let vowelCount = 0;
//     let nonVowelCount =0;
//     let splitWord = word.split('')
//     for(let i = 0; i < splitWord.length; i++){
//         let letter = splitWord[i]
//        if(vowels.includes(letter)){
//         vowelCount ++;
//        }else if(!vowels.includes(letter)){
//         nonVowelCount ++
//        }
//     }
//     return vowelCount > nonVowelCount 
// }
// console.log(hasMoreVowels('hey'))
// console.log(hasMoreVowels('eee'))
// ```

// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
// The best function will be given an array of stock prices in the order they happened throughout the day.
// It should return the maximum possible profit on the stock for that day.
// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
// best([15, 10, 20, 22, 1, 9])
// 12
// Here are some more examples with positive profit:
// best([1, 2, 3, 4, 5])
// // 4 - buy at $1, sell at $5
// best([2, 3, 10, 6, 4, 8, 1])
// // 8 - buy at $2, sell at $10
// best([7, 9, 5, 6, 3, 2])
// // 2 - buy at $7, sell at $9
// best([0, 100])
// // 100 - buy at $0, sell at $100
// If no profit is possible, return $0:
// best([5, 4 , 3, 2, 1])
// // 0
// best([100])
// // 0
// best([100, 0])
// // 0

// ```js
// let best = (arr) => {
//     let maxProfit = 0;
//     let minPrice = Infinity;
//     for(let i=0; i < arr.length; i++){
//         minPrice = Math.min(minPrice, arr[i])
//         const potentialProfit = arr[i] - minPrice;
//         maxProfit = Math.max(maxProfit, potentialProfit)
//     }
//     return maxProfit
// }
// console.log(best([2, 3, 10, 6, 4, 8, 1]))
// console.log(best([5, 4 , 3, 2, 1]))
// ```


// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.
// Start by creating a function called decoder that has a single parameter called code.
// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).
// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.
// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.
// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.
// Here are a few more examples:

// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'




// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)
// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:
// printDigits(1)
// // 1
// printDigits(314)
// // 4
// // 1
// // 3
// printDigits(12)
// // 2
// // 1
// ```js
// let printDigits = (num) => {
//     while(num > 0){
//         let digit = num % 10
//         console.log(digit)
//         num = Math.floor(num / 10)
//     }
// }
// ```
// printDigits(12)
// console.log(217 % 10)

// ```js
// let decoder = (str) => {
//     const num = parseInt(str[0], 10);
//     console.log(num)
//     let decodedStr = '';
//     for (let i = 1; i < str.length; i++) {   
//       const charCode = str.charCodeAt(i) + num;
//       decodedStr += String.fromCharCode(charCode);
//     }
//     return decodedStr;
// }
// ```
// console.log(decoder("1a"))
// console.log(decoder("3ce"))
// console.log(decoder("2fcjjm"))

//////////////////////////////////////////////////////////////////////////////
//// 4-25 

// ```js
// let removeDuplicateLetters = (str) => {
//   let uniqueStr = '';
//   for(let i =0; i < str.length; i++){
//     if(uniqueStr.indexOf(str[i]) === -1){
//       uniqueStr += str[i]
//     }
//   }
//   return uniqueStr
// }
// console.log(removeDuplicateLetters('helloworld'))
// console.log(removeDuplicateLetters('iwanttoclimbamoutain'))
// ```
/////////////////////////////////////////////////
///////// 4/26
// ```js
// let hasBalancedParentheses = (str) => {
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === '('){
//             count++;   
//         } else if(str[i] === ')'){
//             count--;
//             if(count < 0){
//                 return false;
//             }
//         }
//     }
//     return count === 0;
// } 
// console.log(hasBalancedParentheses('((()))))'))
// ```
////////////////////////////////////////////////////////
//////////////4-27
// ```js
// let tShirtSorter = (str) => {
//     // set up three new vars for small, medium, large
//     let strS = '';
//     let strM = '';
//     let strL = '';
//     //loop over the string, checking if the string at index I is === to 's', 'm', or 'l'. if it is equal to any of those letters add it to the new stirngs we made. 
//     for(i = 0; i < str.length; i++){
//         if(str[i] === 's'){
//             strS += str[i]
//         }else if(str[i] === 'm'){
//             strM += str[i]
//         }else{
//             strL += str[i]
//         }
//     }
//     //return the new string values in the order of small, medium, large
//     return strS + strM + strL
// }
// console.log(tShirtSorter('llllmmmmmsssss'))
// ```

//////5/1////////////////

let findOutlier = (arr) => {
    // variable to keep track of the number of odd and even intagers 
    let numOdd = 0;
    let numEven = 0;
    // variables to store the current odd and even integers 
    let currentOdd  = null;
    let currentEven = null;
    // loop through the array and cont the number of odds and evens
    for(let i = 0; i < arr.length; i++){
        const integer = arr[i]
        if (integer % 2 === 0){
            numEven++
            currentEven = integer
            console.log(currentEven)
        }
        else {
            numOdd++
            currentOdd = integer
            console.log(currentOdd)
        }
    }
    //If we have found both an odd and even integer we can return the outlier
    if(numOdd > 0 && numEven > 0) {
        return numOdd > numEven ? currentEven : currentOdd
    }
}
let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36] 
let arr2 = [160, 3, 1719, 19, 11, 13, -21]
console.log(findOutlier(arr1))
console.log(findOutlier(arr2))
