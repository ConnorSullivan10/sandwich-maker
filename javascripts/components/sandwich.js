import bread from './bread.js';
import veggie from './veggie.js';
import condiment from './condiment.js';
import cheese from './cheese.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domstring2 = `
            <div class="card text-center">
                <div class="card-header">
                    Custom Sandwich
                </div>
                <div class="card-body">
                    `;
    let sum = 0;
    for(let i = 0; i < items.length; i++){
        let priceNumber = items[i].price
        sum += priceNumber;
        priceNumber /= 100;
        let ingredientPrice = priceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        domstring2 += `
        <p>${items[i].name} ${ingredientPrice}</p>
        `
        };
    sum /= 100;
    const totalIngredientPrice = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    domstring2 += `<hr>
    <h5>Noice sandwich dude. Your total is ${totalIngredientPrice}</h5>
    <a href="#" class="btn btn-primary">Place Order</a>
        </div>
    </div>`
    utilities.printToDom('final-order', domstring2);
};

const createOrderEvent= () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedCondiments = condiment.getSelectedCondiments();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const allItems = selectedBreads.concat(selectedVeggies, selectedCondiments, selectedCheeses, selectedMeats);
   createFinalOrder(allItems);
};

const printOrderButton = () => {
    const domstring = '<button id="order-button" class="btn btn-success">Build Your Custom Sandwich</button>';
    utilities.printToDom('final-order', domstring);
    document.getElementById("order-button").addEventListener('click', createOrderEvent)
};

export default { printOrderButton };