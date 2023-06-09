
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

// let findOutlier = (arr) => {
//     // variable to keep track of the number of odd and even intagers 
//     let numOdd = 0;
//     let numEven = 0;
//     // variables to store the current odd and even integers 
//     let currentOdd  = null;
//     let currentEven = null;
//     // loop through the array and cont the number of odds and evens
//     for(let i = 0; i < arr.length; i++){
//         const integer = arr[i]
//         if (integer % 2 === 0){
//             numEven++
//             currentEven = integer
//             console.log(currentEven)
//         }
//         else {
//             numOdd++
//             currentOdd = integer
//             console.log(currentOdd)
//         }
//     }
//     //If we have found both an odd and even integer we can return the outlier
//     if(numOdd > 0 && numEven > 0) {
//         return numOdd > numEven ? currentEven : currentOdd
//     }
// }
// let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36] 
// let arr2 = [160, 3, 1719, 19, 11, 13, -21]
// console.log(findOutlier(arr1))
// console.log(findOutlier(arr2))
////////5/2/////////////////////////////

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don’t forget the space after the closing parentheses!
// ```js
// let createPhoneNumber = (arr) => {
//     let var1 = arr.splice(0,3).join("")
//     let var2 = arr.splice(0,3).join("")
//     let var3 = arr.splice(0,4).join("")
//     let phoneString = `(${var1}) ${var2}-${var3}`
//     console.log(phoneString)
// }
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0])
// ```
///////////5/3///////////////////
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be: 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nbYear should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// Examples:
// nbYear(1500, 5, 100, 5000) --> 15
// nbYear(1500000, 2.5, 10000, 2000000) --> 10
// Note: Don’t forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// ```js
// let nbYear = (p0, percent, aug, p) => {
//     // convert the percent to a decimal
//     let floatPercent = percent / 100;
//     let population = p0;
//     let years = 0;
//     while(population < p){
//         // calculate the new population at the end of each year
//         population += population * floatPercent + aug;
//         years++;
//     }
//     return years
// }
// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
// ```
/////////////5/3//////////////////
// It’s your birthday! You wrote a wishlist and now you’re trying to guess which gift is which before you open it.
// You will be given a wishlist (array), containing all possible items. Each item is in the format:
// {name: "toy car",
// size: "medium",
// clatters: "a bit",
// weight: "medium"}
// You also get a list of presents (array) which have the following format each:
// {size: "small",
// clatters: "no",
// weight: "light"}
// Your task is to return the names of all wishlisted presents that you might have gotten.
// Rules
// Possible values for size: “small”, “medium”, “large”
// Possible values for clatters: “no”, “a bit”, “yes”
// Possible values for weight: “light”, “medium”, “heavy”
// Don’t add any item more than once to the result
// The order of names in the output doesn’t matter
// It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

// var wishlist = [
//     {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
//     {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
//     {name: "Card Game", size: "small", clatters: "no", weight: "light"}
// ];
// var presents = [
//     {size: "medium", clatters: "a bit", weight: "medium"},
//     {size: "small", clatters: "yes", weight: "light"}
// ];

// let guessGifts = (wish, pres) => {
//     let result = [];
//     wish.forEach(item => {
//         pres.forEach(present => {
//             if(
//                 item.size === present.size &&
//                 item.clatters === present.clatters && 
//                 item.weight === present.weight && 
//                 !result.includes(item.name)
//                 ){
//                     result.push(item.name)
//                 }             
//         })
//     });
//     return result
// }
// console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]
///////////5/8//////////////////////////////////////////////////////////////////////////////////////////

// let towerBuilder = (n) => {
//     // set up an empty array for tower 
//     let tower = [];
//     //calculate the width of the tower based on number of floors passed on 
//     let width = n * 2 -1;
//     // calculate the number of stars and spaces needed. The number of stars is i * 2 + 1, where i is the current floor number. The number of spaces is calculated by subtracting the number of stars from the width of the tower and dividing by 2
//     for(let i = 0; i < n; i++){
//         let stars = i * 2 + 1;
//         let spaces = (width - stars) /2;
//         // We then create a string floor that combines the correct number of spaces, stars, and spaces using the repeat() method and string concatenation.
//         let floor = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
//         tower.push(floor) 
//     }
//     return tower
// } 

// console.log(towerBuilder(5))
///////////////////////5/9////////////////////////////////////////
// You might know some pretty large perfect squares. But what about the NEXT one?
// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// For example:
// perfectSquare(9) // should return 16 (3x3=9, 4x4=16)
// perfectSquare(289) // should return 324 (17x17=289 18x18=324)
// // perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)
// const perfectSquare = (num) => {
//     // calculate the square root of the given number
//     const squareRoot = Math.sqrt(num);
//     // if the square root is an integer, then it is a square. 
//     if(Number.isInteger(squareRoot)){
//         // find the next perfect square by adding 1 to the square root and then squareing it 
//         const nextSquare = Math.pow(squareRoot +1, 2)
//         return nextSquare
//     }else{
//         // if the square root is not an integer, then the number is not a perfect square 
//         return -1
//     }
// }
// console.log(perfectSquare(9))
// console.log(perfectSquare(289))
// console.log(perfectSquare(3000))

//////////////5/10/////////////////////

// let toRoman = (num) => {
//     const decimal = [1000, 500, 100, 50, 10, 5, 1]
//     const roman =['M', 'D', 'C', 'L', 'X', 'V', 'I']
//     let result = '';
//     //loop through the decimal and Roman arrays 
//     for(let i = 0; i< decimal.length; i++){
//         //repeat the current roman numeral as many times as possible 
//         while(num >= decimal[i]){
//             result += roman[i]
//             num -= decimal[i]
//         }
//         //check for a special case where the current roman numeral is less than the next one
//         if(i< decimal.length - 1 && num >= decimal[i] - decimal[i+1]){
//             result += roman[i+1] + roman[i]
//             num -= decimal[i] - decimal[i+1]
//         }
//     }
//     return result
// }

// console.log(toRoman(5))
// console.log(toRoman(500))
// console.log(toRoman(5))
// console.log(toRoman(10))
//////////////////////5/11////////////////////////////////////
// ```js
// let sortByProduct = (arr) => {
//     //map the values to an array of objects containing value, index, and product
//     const mapArr = arr.map((value, index) => {
//         return {value, index, product: value * (index +1)}
//     })
//     //sort the mapped array by produc in acending order
//     mapArr.sort((a,b) => a.product - b.product)
//     //map the sorted array back to an array of values only 
//     const sortedArr = mapArr.map(obj => obj.value)
//     return sortedArr
// }
// ```
// console.log(sortByProduct([23, 2, 3, 4, 5]))\
/////////////////////////////5/15///////////////////////////

// let timeWord = (time) =>{
//     //split time string into hours and minutes 
//     const [hours, minutes] = time.split(':').map(Number)
//     //define an array of words for the hours 
//     let hoursWords = ['midnight','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
//     //define an array of words for the tens of minutes
//     const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty']
//     // define an array of words for minutes
//     const onesWords = ['o', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',' eight', 'nine', 'ten', 'eleven' , 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
//     // get the word for the hours 
//     let hoursWord = hoursWords[hours % 12]
//     let tens = Math.floor(minutes / 10)
//     let ones = minutes % 10
//     let tensWord = tensWords[tens]
//     let onesWord = onesWords[ones]
//     // determinum am/pm
//     const amPm = hours < 12 ? 'am' : 'pm'
//     if(time ==='00:00'){
//         return 'midnight'
//     }else if(time === '12:00'){
//         return 'noon'
//     }else if(minutes === 0){
//         return `${hoursWord} o'clock ${amPm}`
//     }else if(tens === 0){
//         return `${hoursWord} ${onesWord} ${amPm}`
//     }else if(tens === 1){
//         return `${hoursWord} ${onesWords[minutes]} ${amPm}`
//     }else if(ones === 0){
//         return `${hoursWord} ${tensWord} ${amPm}`
//     }else{
//         return `${hoursWord} ${tensWord} ${onesWord} ${amPm}`
//     }
// }

// console.log(timeWord("06:28"))
// console.log(timeWord("6:00"))
////////////////5/16//////////////////////////////////////

// function calculateRoadTripStats(tripData) {
//     const result = {
//       segmentTimes: [],
//       totalTime: 0,
//       avgSpeedLimits: []
//     };
  
//     for (let i = 0; i < tripData.speedLimits.length; i++) {
//       const segment = tripData.speedLimits[i];
//       const segmentTime = Math.round(segment.distance / segment.speedLimit);
//       result.segmentTimes.push(segmentTime);
  
//       const weightedAverage = tripData.speedLimits.reduce((total, seg) => {
//         const weight = seg.distance / segment.distance;
//         return total + seg.speedLimit * weight;
//       }, 0);
//       const averageSpeedLimit = Math.round(weightedAverage);
//       result.avgSpeedLimits.push(averageSpeedLimit);
//     }
  
//     const totalTripTime = result.segmentTimes.reduce((total, time) => total + time, 0);
//     result.totalTime = totalTripTime;
  
//     return result;
//   }
  
//   const tripData = {
//     name: `Jake's Great Shakes`,
//     speedLimits: [
//       {
//         distance: 100,
//         speedLimit: 75
//       },
//       {
//         distance: 84,
//         speedLimit: 70
//       },
//       {
//         distance: 20,
//         speedLimit: 75
//       }
//     ],
//     traffic: 30
//   };
  
//   const roadTripStats = calculateRoadTripStats(tripData);
//   console.log(roadTripStats);
//////////////////5/17//////////////////////////////
// ```js
// let smallestDifference = (arr1, arr2) => {
//     // Sort the arrays in ascending order
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
  
//     let smallestDiff = Infinity;
//     let i = 0; // Pointer for arr1
//     let j = 0; // Pointer for arr2
  
//     // Traverse both arrays and update smallestDiff when a smaller difference is found
//     while (i < arr1.length && j < arr2.length) {
//       const diff = Math.abs(arr1[i] - arr2[j]);
//       if (diff < smallestDiff) {
//         smallestDiff = diff;
//       }
  
//       // Move the pointers based on the comparison
//       if (arr1[i] < arr2[j]) {
//         i++;
//       } else {
//         j++;
//       }
//     }
  
//     return smallestDiff;
//   }
  
//   const arr1 = [10, 20, 14, 16, 18];
//   const arr2 = [30, 23, 54, 33, 96];
//   const result = smallestDifference(arr1, arr2);
//   console.log(result);
//   ```
// ////////////5/18///////////////////
// function canWin(n) {
//   if (n <= 1) {
//     // If there are fewer than 2 stones, the active player loses
//     return false;
//   }

//   // Check all possible moves the active player can make
//   for (let i = 2; i <= 5; i++) {
//     // If the active player can force the opponent into a losing position, return true
//     if (!canWin(n - i)) {
//       return true;
//     }
//   }

//   // If none of the moves lead to a winning position, the active player loses
//   return false;
// }

// console.log(canWin(1));  // false
// console.log(canWin(2));  // true
// console.log(canWin(3));  // true
// console.log(canWin(4));  // true
// console.log(canWin(5));  // true
// console.log(canWin(6));  // true
// console.log(canWin(7));  // false
// console.log(canWin(8));  // false
// console.log(canWin(9));  // true
// console.log(canWin(10)); // true
