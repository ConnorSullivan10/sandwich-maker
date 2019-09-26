import bread from './components/bread.js'
import order from './components/order.js';
//3rd thing: make init function in the main.js

const init = () => {
    //do stuff
    bread.printBreadOptions();
    order.printOrderButton();
    //inside store there's a function call this and run it
};

init();