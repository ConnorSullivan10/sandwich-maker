import utilities from '../helpers/utilities';

const meats = [
  { id: 'meat1', name: 'Impossible Beef', price: 400 },
  { id: 'meat2', name: 'Dank Steak', price: 700 },
  { id: 'meat3', name: 'Gator Tail', price: 800 },
  { id: 'meat4', name: 'Fire Chicken', price: 300 },
];

const getSelectedMeats = () => {
  const selectedMeats = [];
  const meatCheckboxes = document.getElementsByClassName('meat');
  for (let j = 0; j < meatCheckboxes.length; j += 1) {
    for (let k = 0; k < meats.length; k += 1) {
      if (meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id) {
        selectedMeats.push(meats[k]);
      }
    }
  }
  return selectedMeats;
};

const printMeatOptions = () => {
  let domString = '';
  for (let i = 0; i < meats.length; i += 1) {
    domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
        <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
      </div>
      `;
  }
  utilities.printToDom('meat-counter', domString);
};

export default { printMeatOptions, getSelectedMeats };
