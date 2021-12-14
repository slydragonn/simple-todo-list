import showToDo from "./showTodo.js";
import completed from "./completed.js";
import editToDo from "./editToDo.js";

const nameToDo = document.getElementById('nameToDo');
const descriptionToDo = document.getElementById('descriptionToDo');
const categoryToDo = document.getElementById('category');

export const addToDo = document.getElementById('addToDo');

const getToDo = () => {

    if(nameToDo.value && descriptionToDo.value){
        showToDo(nameToDo.value, descriptionToDo.value, categoryToDo.value);

        nameToDo.value = '', descriptionToDo.value = '';
    }
    else{
        alert('Falta un valor en "Name" ó "Description"');
    }
}

export function getTarget(target){
    if(target.id.length == 12) completed(target.parentNode.parentNode.id);

    if(target.id.length == 13) editToDo(target.parentNode.parentNode.id);
}

export default getToDo;