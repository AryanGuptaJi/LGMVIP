const tasks = document.querySelector('.tasks');
const add = document.querySelector('.add');
var inputValue = document.querySelector('.input');

if(window.localStorage.getItem("todos") == undefined){
	var todos = [];
	window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item{
	constructor(itemName){
		this.createDiv(itemName);
	}
    createDiv(itemName){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = itemName;
    	input.classList.add('add_items');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, itemName));

    	var removeButton = document.createElement('button');
    	removeButton.classList.add('removeButton');
    	removeButton.innerHTML = "REMOVE";
    	removeButton.addEventListener('click', () => this.remove(itemBox, itemName));

    	tasks.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(removeButton);

    }

    edit(input, itemName){
		if(input.disabled == true){
			input.disabled = !input.disabled;
		}
		else{
			 input.disabled = !input.disabled;
			 let indexof = todos.indexOf(itemName);
			 todos[indexof] = input.value;
			 window.localStorage.setItem("todos", JSON.stringify(todos));
		}
    }

    remove(itemBox, itemName){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(itemName);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.key == "Enter"){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
    	todos.push(inputValue.value);
    	window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

