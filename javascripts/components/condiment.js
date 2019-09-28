import utilities from '../helpers/utilities.js';

const condiments = [
    {id:"condiment1", name: "grey poupon", price: 200 },
    {id:"condiment2", name: "hot sauce", price: 50 },
    {id:"condiment3", name: "lite mayo", price: 50 },
    {id:"condiment4", name: "zax sauce", price: 75 },
];

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    // get all condiment checkboxes
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    console.log(condimentCheckboxes);
    // keep the checked ones in a new array
    for (let j = 0; j < condimentCheckboxes.length; j++) {
        for(let k = 0; k < condiments.length; k++){
            if(condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id){
                selectedCondiments.push(condiments[k]);
            }
        }
    }


    // return the new array
    return selectedCondiments;
};

const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i++){
        domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiment" id="${condiments[i].id}">
        <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
      </div>
      `;
    }

    
    utilities.printToDom('condiment-counter', domString);
};

export default { printCondimentOptions, getSelectedCondiments };