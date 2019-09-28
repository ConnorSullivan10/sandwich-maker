import bread from './bread.js';
import veggie from './veggie.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domstring2 = '';
    for(let i = 0; i < items.length; i++){
        domstring2 += `
        <h3>${items[i].name} ${items[i].price}</h3>`;
    }
    utilities.printToDom('final-order', domstring2);
};

const createOrderEvent= () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedVeggies = veggie.getSelectedVeggies();
    const allItems = selectedBreads.concat(selectedVeggies);
   createFinalOrder(allItems);
};

const printOrderButton = () => {
    const domstring = '<button id="order-button" class="btn btn-success">Make Sandwich</button>'
    utilities.printToDom('final-order', domstring);
    document.getElementById("order-button").addEventListener('click', createOrderEvent)
};

export default { printOrderButton };