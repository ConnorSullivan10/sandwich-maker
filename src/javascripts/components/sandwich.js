import bread from './bread';
import veggie from './veggie';
import condiment from './condiment';
import cheese from './cheese';
import meat from './meat';
import utilities from '../helpers/utilities';

const createFinalOrder = (items) => {
  let domstring2 = `
            <div class="card text-center">
                <div class="card-header">
                    Custom Sandwich Builder
                    <button class="close d-flex justify-content-end">X</button>
                </div>
                <div class="card-body">
                    `;
  let sum = 0;
  for (let i = 0; i < items.length; i += 1) {
    let priceNumber = items[i].price;
    sum += priceNumber;
    priceNumber /= 100;
    const ingredientPrice = priceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    domstring2 += `
        <p>${items[i].name} ${ingredientPrice}</p>
        `;
  }
  sum /= 100;
  const totalIngredientPrice = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  domstring2 += `<hr>
    <img src="https://media.giphy.com/media/Ls6ahtmYHU760/giphy.gif">
    <h5>Nice sandwich dude. Your total is ${totalIngredientPrice}.</h5>
    <a href="#" class="btn btn-primary">Place Order</a>
        </div>
    </div>`;
  utilities.printToDom('final-order', domstring2);
};

const createOrderEvent = () => {
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
  document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };
