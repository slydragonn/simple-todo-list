import showToDo from "./showTodo.js";

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

export default getToDo;