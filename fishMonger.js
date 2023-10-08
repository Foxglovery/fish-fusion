const {boatInventory}= require("./fishingBoat")
const {database} = require("./fishingBoat")
//XXXimport boatInventory() from fishingBoat.js
//XXXdefine function named mongerInventory
//XXXcan specify maximum $ spent per fish passed in as an argument
//XXXwill need an empty array of objects

// const mongerInventory = (maxPrice) => {
//      let finalMongerArray= []
//     let mongerBought = database.filter((fish) => { //did not expect to be able to put two returns in here but it guess one is not a return technically.
//         return fish.price < maxPrice && fish.amount >= 10;})// filter fish according to chef specs
//         //.map(fish => fish.species)//only prints the species of that array. the internet strikes again. I cant believe this worked.
//         let finalMongerObject = {}
//         for (let i = 0; i<mongerBought.length; i++) {
//         finalMongerObject[mongerBought[i].species] = mongerBought[i]//(Math.ceil(mongerBought[i].amount * .5)
//         }
//         return finalMongerObject
// }

//    console.log(mongerInventory(7.50)) //TEST LOG

const mongerInventory = (maxPrice) => {
    const mongerArray = []
    mongerBought = database.filter((fish) => {return fish.price < maxPrice && fish.amount >= 10;})
    for (let i =0; i<= Math.ceil(database.amount * .5);i++) { //added in the for loop to try and add amount in there
    mongerArray.push(mongerBought)
    }
   
    return mongerBought
}



 
//console.log(mongerInventory(7.50)) //TEST LOG
//XXXEACH DAY:
//XXXbuys exactly 10 of the least $
    //XXXif any quantity is < 10; no sale
    //XXXwill not spend more than 7.50 per fish

//XXXfrom the array of fish purchased from boat, filter inventory to meet criteria
//XXX ADDED TASK: ONLY INCLUDE SPECIES IN ARRAY
//XXXreturn THAT final array


  




module.exports = {mongerInventory} //FORGOT TO EXPORT