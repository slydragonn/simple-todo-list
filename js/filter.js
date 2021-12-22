import completed from "./completed.js";
import showToDo, { listToDo } from "./showTodo.js";

export default function filterTodo(filter){
    const category = filter.options[filter.selectedIndex].value;
    const todoToFilter = [];
    for(let i = 0; i < localStorage.length; i++){
        todoToFilter.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    listToDo.innerHTML = '';

    todoToFilter.forEach(el => {
        if(el.category === category){
            showToDo(el.nameTodo, el.description, el.category, el.date, el.id);
            if(el.check === true) completed(el.id, true);
        }else if(category === 'all'){
            showToDo(el.nameTodo, el.description, el.category, el.date, el.id);
            if(el.check === true) completed(el.id, true);
        }
    })
}