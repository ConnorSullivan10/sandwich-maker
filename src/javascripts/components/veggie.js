import utilities from '../helpers/utilities';

const veggies = [
  { id: 'veggie1', name: 'Bell Pepper', price: 50 },
  { id: 'veggie2', name: 'Jalapeno', price: 90 },
  { id: 'veggie3', name: 'Carrot', price: 40 },
  { id: 'veggie4', name: 'Spinach', price: 25 },
];

const getSelectedVeggies = () => {
  const selectedVeggies = [];
  const veggieCheckboxes = document.getElementsByClassName('veggie');
  for (let j = 0; j < veggieCheckboxes.length; j += 1) {
    for (let k = 0; k < veggies.length; k += 1) {
      if (veggieCheckboxes[j].checked && veggieCheckboxes[j].id === veggies[k].id) {
        selectedVeggies.push(veggies[k]);
      }
    }
  }
  return selectedVeggies;
};

const printVeggieOptions = () => {
  let domString = '';
  for (let i = 0; i < veggies.length; i += 1) {
    domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input veggie" id="${veggies[i].id}">
        <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
      </div>
      `;
  }
  utilities.printToDom('veggie-counter', domString);
};

export default { printVeggieOptions, getSelectedVeggies };
