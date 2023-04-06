/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAtack = 35;

/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
if(jamieLannisterAtack === jonSnowAttack){
    console.log('tie')
}
else if(jonSnowAttack > jamieLannisterAtack){
    console.log('John Snow wins with a atk of ' + jonSnowAttack )
}else {
    console.log('jamie has greater attack')
}

// Jamie, knowing he is the superior, initiates a fight with Jon. Let’s create some additional stats for Jon Snow so we can see how this plays out.
let jonSnowHealth = 100;
let JonSnowDef = 20;
let jamieLanisterHealth = 40;
let jamieLanisterDef = 0

// Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log “Jon Snow has been slain.” Otherwise, condole.log Jon Snow’s health.
// if (jamieLannisterAtack >= jonSnowHealth){
//     console.log('johnsnow has been slain')
// }else {
//     jonSnowHealth -= jamieLannisterAtack
//     console.log(jonSnowHealth)
// }


// Jon Snow, adamant he does not want to fight Jamie (can you blame him?), picks up a shield to help defend himself. Increase Jon’s defense by 25.
// JonSnowDef += 25
// Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon’s defense. If he does not, console.log “Jon Snow has been slain.” Otherwise, console.log Jon Snow’s health.
// if(jonSnowHealth+JonSnowDef <= jamieLannisterAtack){
//     console.log('Jon has been slain')
// }else {
//     jonSnowHealth = (jonSnowHealth - (JonSnowDef - jamieLannisterAtack))
//     console.log('John is still alive with ' + jonSnowHealth + ' health')
    
// }
// One of the town’s people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon’s health by 50pts. However, Jon’s health cannot exceed 100. Using an if else statement, raise Jon’s health to the appropriate level.
// if((jonSnowHealth + 50) >= 100){
//     jonSnowHealth = 100;
// }else {
//     jonSnowHealth +=50
// }


// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon’s head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).
let coinLandsHeads = false

if(coinLandsHeads === true){
    console.log('The fight continues')
}else {
    console.log('jon can leave')
}


// Demonstrate how you can use != to accomplish the same thing.



// Let’s see how this battle will play out if it continues. Create a for loop that will have Jamie attack Jon 5 times. Console log Jon Snow’s health after each attack.
// Now we will combine for loops and if statements. Add a condition to check if Jon Snow will survive

for(let i =0; i < 10; i++){
 
    if(jonSnowHealth < 0){
     console.log('jon has been slain')
    }else{
        jonSnowHealth -= jamieLannisterAtack - JonSnowDef
        console.log(`Jon survived with ${jonSnowHealth}`)
    }
}



// Demonstrate a while loop that will have Jamie attack Jon until Jon is slain. You will need to comment out the above for loops for these to run properly.

// Add an if statement that will let us know that Jon Snow has been slain.

while(jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log(`Jon Snow has been slain`)
    }
}