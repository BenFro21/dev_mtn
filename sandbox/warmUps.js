
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
```js
let fizzBuzz = (num) => {
    for( let i=1; i <= num; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if (i % 3 === 0){
            console.log('fizz')
        }else if (i % 5 === 0){
            console.log('buzz')
        }else {
            console.log(i)
        }
    }
}
fizzBuzz(50)
```