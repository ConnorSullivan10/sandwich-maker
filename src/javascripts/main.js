import 'bootstrap';
import '../styles/main.scss';
import bread from './components/bread';
import veggie from './components/veggie';
import condiment from './components/condiment';
import cheese from './components/cheese';
import meat from './components/meat';
import sandwich from './components/sandwich';

const init = () => {
  bread.printBreadOptions();
  veggie.printVeggieOptions();
  condiment.printCondimentOptions();
  cheese.printCheeseOptions();
  meat.printMeatOptions();
  sandwich.printOrderButton();
};

init();
