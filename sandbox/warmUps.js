
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