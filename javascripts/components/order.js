import bread from './bread.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domstring2 = '';
    for(let i = 0; i < items.length; i++){
        domstring2 += `
        <div class="card text-center">
            <h2 class="card-header">
                Final Sandwich Order
            </h2>
            <div class="card-body">
                <h3>${items[i].name} ${items[i].price}</h3>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
    }
    utilities.printToDom('final-order', domstring2);
};

const createOrderEvent= () => {
    const selectedBreads = bread.getSelectedBreads();
    createFinalOrder(selectedBreads);
};

const printOrderButton = () => {
    const domstring = '<button id="order-button" class="btn btn-success">Make Sandwich</button>'
    utilities.printToDom('final-order', domstring);
    document.getElementById("order-button").addEventListener('click', createOrderEvent)
};

export default { printOrderButton };