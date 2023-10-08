
const {mongerInventory} = require("./fishMonger")

const fishMenu = (maxPrice) => {
    const todaysFish = mongerInventory(maxPrice) // stores the output of mongerInventory
    console.log(`<article class="menu">`)

    
    for (i = 0; i<todaysFish.length; i++) {
        console.log(`
        <h2>${todaysFish[i].species}</h2>
        <section class="menu__item">${todaysFish[i].species} Soup</section>
        <section class="menu__item">${todaysFish[i].species} Sandwich</section>
        <section class="menu__item">Grilled ${todaysFish[i].species}</section>`)//HOLY SHIT I FINALLY HAVE CONTROL OF THE ARRAY
    }
    console.log('</article>')
     
}
fishMenu(4.99) //TEST SNIPPET

//XXXimport function mongerInventory from fishMonger.js
//Define function fishMenu that also build (logs) html daily menu and creates 3 meals from that menu
    //is passed max price as argument for to be passed to mongerInventory
    //if mongerInventory has fish <= max price, purchases 50% of inv.
        //update mongerInventory logic

    //for each purchased fish type, 
    //the function returns the generated html string
