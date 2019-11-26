import utilities from '../helpers/utilities';

const condiments = [
  { id: 'condiment1', name: 'Grey Poupon', price: 200 },
  { id: 'condiment2', name: 'Hot Sauce', price: 50 },
  { id: 'condiment3', name: 'Lite Ranch', price: 50 },
  { id: 'condiment4', name: 'Zax Sauce', price: 75 },
];

const getSelectedCondiments = () => {
  const selectedCondiments = [];
  const condimentCheckboxes = document.getElementsByClassName('condiment');
  for (let j = 0; j < condimentCheckboxes.length; j += 1) {
    for (let k = 0; k < condiments.length; k += 1) {
      if (condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id) {
        selectedCondiments.push(condiments[k]);
      }
    }
  }
  return selectedCondiments;
};

const printCondimentOptions = () => {
  let domString = '';
  for (let i = 0; i < condiments.length; i += 1) {
    domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiment" id="${condiments[i].id}">
        <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
      </div>
      `;
  }
  utilities.printToDom('condiment-counter', domString);
};

export default { printCondimentOptions, getSelectedCondiments };
