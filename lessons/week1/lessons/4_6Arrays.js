// //Arrays
// let arr1 = [1,2,3,4,5,6]

// arr1.push(7) // adds item to end of array 
// arr1.pop() // removes last item from an array 
// arr1.shift() // removes the first item of an array 
// arr1.unshift(0) // adds item to the start of an array

// let arr2 = arr1.slice(0,2) // makes anew array of the items indexed 

// arr1.splice(1, 2, 3)
// let arr3 = arr1.splice(1,2,3)
// if you want to delete somthing 
// The index at which we want to begin editing
// How many items to remove from the array
// Any values to replace at that index

/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];
let belt = []

backpack.push('sword')
backpack.push('torch')
backpack.push('food')
backpack.push('shield')
backpack.push('sweater')

let sword = backpack.splice(0,1) // starting at index 0 and removing one value 
belt.push(sword[0]) // have to add [0] so there is not an array withen an array 

backpack.push('fur-coat')

backpack.pop() // removes the fur coat 
backpack.push('flint', 'blanket', 'knife', 'toothbrush', 'cell-phone')

let itemCount = backpack.length // for total number in backpack
console.log(`item count: ${itemCount}`)
console.log(backpack)
let backpack2 = []
let removedItems = backpack.splice(4,3) //remove 3 items starting at index 4
backpack.pop(removedItems)


let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
}
console.log(guessMe)