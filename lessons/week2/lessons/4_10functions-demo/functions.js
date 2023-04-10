// create a var for jons health 
let jonSnowHealth = 100;

// jonSnowHealth = String(jonSnowHealth)
// console.log(typeof jonSnowHealth)

let theWinnerIs = 'Jamie is the winner'

let theNewWinner = theWinnerIs.replace('Jamie', 'Jon') // Need to store in new var because strings are unmutable 

//reasign the value of theWinnerIs
theWinnerIs = theWinnerIs.replace('Jamie', 'Jon')

// console.log(theWinnerIs)
// // console.log(theNewWinner)

// if(theNewWinner.includes('Jon')){
//     console.log('Changes confirmed to string')
// }

// lets convert our string to kebab case : jon-is-the-winner

let newWinnerLower = theWinnerIs.toLowerCase();
let newWinnerSplit = newWinnerLower.split(' ');
let newWinnerJoin = newWinnerSplit.join('-')

// let newWinnerKebab = theWinnerIs.toLowerCase().split(' ').join('-') the same as doing three seperate vars 
// console.log(newWinnerJoin)

// functions 

//Declaring the fuction
// any function decleration is hoasted to the top of the file 
function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive')
    }else{
        console.log('Jon has been slain, RIP Jon')
    }
}
// invokeing the function 
isJonAlive()

//function with paramsfor everytime jon is attacked 

let surpiseAttack = function(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

surpiseAttack(30)
surpiseAttack(20)
surpiseAttack(25)
surpiseAttack(25)
// console.log(jonSnowHealth)

//Function with mutiple arguments 
// lets create a function that takes in the name of two people and greet each other 

let greeting = (person1, person2) => {
    console.log(`${person1} and ${person2} say hello to each other`)
}

greeting('Ben', 'Ned')

// const greetings = (p1, p2) => console.log(`${p1} and ${p2} say hello to each other`)
//  can do it all on one line with no brackets and no return 

// Create a function to repersent a dice roll

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}
let firstRoll = rollDice()
let secondRoll = rollDice()

console.log(firstRoll)
console.log(secondRoll)

//lets create a function that calls rollDice twice and multiplies the value and returns it

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()

    return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()
console.log(multipliedNumber)