const addbutton = document.querySelector('.addbutton');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }


createDiv(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');
    container.appendChild(itemBox);
    itemBox.appendChild(input);

    let edit_button = document.createElement('button');
    edit_button.textContent = "EDIT";
    edit_button.classList.add('edit_button');
    itemBox.appendChild(edit_button);

    let remove = document.createElement('button');
    remove.textContent = "DELETE";
    remove.classList.add('remove');
    itemBox.appendChild(remove);
        
    edit_button.addEventListener('click', () => this.edit(input));
    remove.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(itemBox) {
        container.removeChild(itemBox)
    }
}

    addbutton.addEventListener('click', () => {
        if (inputValue.value != " ") {
            new item(inputValue.value);
            inputValue.value = "";
        }
    }) ;
