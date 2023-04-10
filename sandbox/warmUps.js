
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


```js
let arrZero = (arr) => {
    let value = false;
    for(let i =0; i < arr.length; i++){
      for(let j=0; j < arr.length; j++){
        if( i !== j){
            if(arr[i] + arr[j] === 0){
                value = true
            }
        }
      }
    }
    return value
}

console.log(arrZero([1, 4, 11, 2, 37, -4]))
console.log(arrZero([0, 21, 33, 6, 0, -9]))
console.log(arrZero([0, 1, 2, 3, 4, 5]))
```