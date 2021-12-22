import showToDo from "./showTodo.js";
import completed from "./completed.js";
import editToDo from "./editToDo.js";
import deletToDo from "./deletToDo.js";
import dateFormat from "./dateFormat.js";
import assignId from "./assignId.js";

export const nameToDo = document.getElementById('nameToDo');
export const descriptionToDo = document.getElementById('descriptionToDo');
const categoryToDo = document.getElementById('category');

export const addToDo = document.getElementById('addToDo');

const getToDo = () => {

    if(nameToDo.value && descriptionToDo.value){
         const date = dateFormat('dd/mm/yy');
         const idToDo = assignId(11);

         showToDo(nameToDo.value, descriptionToDo.value, categoryToDo.value, date, idToDo);

         const todoObject = {};
         todoObject.nameTodo = nameToDo.value;
         todoObject.description = descriptionToDo.value;
         todoObject.category = categoryToDo.value;
         todoObject.date = date;
         todoObject.id = idToDo;
         todoObject.check = false;

         localStorage.setItem(idToDo, JSON.stringify(todoObject));

        return nameToDo.value = '', descriptionToDo.value = '';
    }
    else{
        return alert('Falta un valor en "Name" ó "Description"');
    }
}

export function getTarget(target){
    if(target.id.length == 12) return completed(target.parentNode.parentNode.id);
    if(target.id.length == 13) return editToDo(target.parentNode.parentNode.id);
    if(target.id.length == 14) return deletToDo(target.parentNode.parentNode.id);
}

export default getToDo;