import utilities from '../helpers/utilities.js';

const meats = [
    {id:"meat1", name: "roast beef", price: 50 },
    {id:"meat2", name: "dank steak", price: 90 },
    {id:"meat3", name: "gator tail", price: 500 },
    {id:"meat4", name: "fire chicken", price: 0 },
];

const getSelectedMeats = () => {
    const selectedMeats = [];
    // get all meat checkboxes
    const meatCheckboxes = document.getElementsByClassName('meat');
    console.log(meatCheckboxes);
    // keep the checked ones in a new array
    for (let j = 0; j < meatCheckboxes.length; j++) {
        for(let k = 0; k < meats.length; k++){
            if(meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id){
                selectedMeats.push(meats[k]);
            }
        }
    }


    // return the new array
    return selectedMeats;
};

const printMeatOptions = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i++){
        domString += ` <div class="form-group form-check">
        <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
        <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
      </div>
      `;
    }

    
    utilities.printToDom('meat-counter', domString);
};

export default { printMeatOptions, getSelectedMeats };