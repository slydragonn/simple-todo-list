import getToDo, { addToDo, descriptionToDo, nameToDo } from "./app.js";
import showToDo, { listToDo } from "./showTodo.js";
import completed from "./completed.js";
import filterTodo from "./filter.js";
import orderToDo from "./orderToDo.js";

const filter = document.getElementById('filterToDo');
const buttonFilter = document.getElementById('buttonFilter');
buttonFilter.addEventListener('click', () => filterTodo(filter));

const orderButton = document.getElementById('orderToDo');
orderButton.addEventListener('click', () => orderToDo(listToDo));

export let saveTodo = [];

if(localStorage.length === 0){
    saveTodo = [];
}else{
    for(let i = 0; i < localStorage.length; i++){
         saveTodo.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
     }
    saveTodo.forEach(el => {
        showToDo(el.nameTodo, el.description, el.category, el.date, el.id);
        if(el.check === true) completed(el.id, true);
    });
}

addToDo.addEventListener('click', getToDo);

descriptionToDo.addEventListener('keyup', (e) =>{

    if(e.keyCode === 13) {
        return function () {
            getToDo()
            nameToDo.focus()
        }();
    }

    return;
});

nameToDo.addEventListener('keyup', (e) =>{

    if(e.keyCode === 13) return descriptionToDo.focus();

    return;
});