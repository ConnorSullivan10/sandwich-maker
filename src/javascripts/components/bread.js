import utilities from '../helpers/utilities';

const breads = [
  { id: 'bread1', name: 'Whole Wheat', price: 50 },
  { id: 'bread2', name: '3 Cheese', price: 90 },
  { id: 'bread3', name: 'Holy Bread', price: 500 },
  { id: 'bread4', name: 'Potato Bread', price: 0 },
];

const getSelectedBreads = () => {
  const selectedBreads = [];
  const breadCheckboxes = document.getElementsByClassName('bread');
  for (let j = 0; j < breadCheckboxes.length; j += 1) {
    for (let k = 0; k < breads.length; k += 1) {
      if (breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id) {
        selectedBreads.push(breads[k]);
      }
    }
  }
  return selectedBreads;
};

const printBreadOptions = () => {
  let domString = '';
  for (let i = 0; i < breads.length; i += 1) {
    domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
        <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
      </div>
      `;
  }
  utilities.printToDom('bread-counter', domString);
};

export default { printBreadOptions, getSelectedBreads };
