import utilities from '../helpers/utilities';

const cheeses = [
  { id: 'cheese1', name: 'American', price: 50 },
  { id: 'cheese2', name: 'Provolone', price: 25 },
  { id: 'cheese3', name: 'Aged Cheddar', price: 100 },
  { id: 'cheese4', name: 'Muenster', price: 75 },
];

const getSelectedCheeses = () => {
  const selectedCheeses = [];
  const cheeseCheckboxes = document.getElementsByClassName('cheese');
  for (let j = 0; j < cheeseCheckboxes.length; j += 1) {
    for (let k = 0; k < cheeses.length; k += 1) {
      if (cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id) {
        selectedCheeses.push(cheeses[k]);
      }
    }
  }
  return selectedCheeses;
};

const printCheeseOptions = () => {
  let domString = '';
  for (let i = 0; i < cheeses.length; i += 1) {
    domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
        <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
      </div>
      `;
  }
  utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions, getSelectedCheeses };
