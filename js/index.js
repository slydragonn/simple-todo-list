import getToDo, { addToDo, descriptionToDo, nameToDo } from "./app.js";

addToDo.addEventListener('click', getToDo);

descriptionToDo.addEventListener('keyup', (e) =>{

    if(e.keyCode === 13) return getToDo();

    return;
});

nameToDo.addEventListener('keyup', (e) =>{

    if(e.keyCode === 13) return descriptionToDo.focus();

    return;
});