import bread from './components/bread.js'
import veggie from './components/veggie.js'
import condiment from './components/condiment.js'
import cheese from './components/cheese.js'
import meat from './components/meat.js'
import sandwich from './components/sandwich.js';
//3rd thing: make init function in the main.js

const init = () => {
    //do stuff
    bread.printBreadOptions();
    veggie.printVeggieOptions();
    condiment.printCondimentOptions();
    cheese.printCheeseOptions();
    meat.printMeatOptions();
    sandwich.printOrderButton();
    //inside store there's a function call this and run it
};

init();