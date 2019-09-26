import utilities from '../helpers/utilities.js';

const breads = [
    {id:"bread1", name: "wheat", price: 50 },
    {id:"bread2", name: "rye", price: 90 },
    {id:"bread3", name: "banana", price: 500 },
    {id:"bread4", name: "white", price: 0 },
];

const getSelectedBreads = () => {
    const selectedBreads = [];
    // get all cheese checkboxes
    const breadCheckboxes = document.getElementsByClassName('bread');
    console.log(breadCheckboxes);
    // keep the checked ones in a new array
    for (let j = 0; j < breadCheckboxes.length; j++) {
        for(let k = 0; k < breads.length; k++){
            if(breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id){
                selectedBreads.push(breads[k]);
            }
        }
    }


    // return the new array
    return selectedBreads;
};

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++){
        domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
        <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
      </div>
      `;
    }

    
    utilities.printToDom('bread-counter', domString);
};

export default { printBreadOptions, getSelectedBreads };