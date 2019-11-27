import $ from 'jquery';
import 'bootstrap';
import '../styles/main.scss';
import bread from './components/bread';
import veggie from './components/veggie';
import condiment from './components/condiment';
import cheese from './components/cheese';
import meat from './components/meat';
import sandwich from './components/sandwich';
import utilities from './helpers/utilities';

const closeSandwichOrder = () => {
  $('body').on('click', '.close', () => {
    utilities.printToDom('final-order', '');
    bread.printBreadOptions();
    veggie.printVeggieOptions();
    condiment.printCondimentOptions();
    cheese.printCheeseOptions();
    meat.printMeatOptions();
    sandwich.printOrderButton();
  });
};


const init = () => {
  bread.printBreadOptions();
  veggie.printVeggieOptions();
  condiment.printCondimentOptions();
  cheese.printCheeseOptions();
  meat.printMeatOptions();
  sandwich.printOrderButton();
  closeSandwichOrder();
};

init();
