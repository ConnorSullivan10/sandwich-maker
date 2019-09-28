import bread from './components/bread.js'
import veggie from './components/veggie.js'
import condiment from './components/condiment.js'
import cheese from './components/cheese.js'
import order from './components/order.js';
//3rd thing: make init function in the main.js

const init = () => {
    //do stuff
    bread.printBreadOptions();
    veggie.printVeggieOptions();
    condiment.printCondimentOptions();
    cheese.printCheeseOptions();
    order.printOrderButton();
    //inside store there's a function call this and run it
};

init();