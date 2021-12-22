export default function completed(id, validator = false){
    const toDoParent = document.getElementById(id);
    const toDoTitle = toDoParent.querySelector('.todo__title');
    const toDoDescription = toDoParent.querySelector('.todo__description');
    const toDoCheck = toDoParent.querySelector('.todo__check');

    const classCompleted = 'through';

    const todo =  JSON.parse(localStorage.getItem(id));

    if(validator){
        if(todo.check){
            toDoCheck.checked = true;
        }
    }

    if(toDoCheck.checked){
         toDoTitle.classList.add(classCompleted);
         toDoDescription.classList.add(classCompleted);
         todo.check = true;
         localStorage.setItem(id, JSON.stringify(todo));
     }else{
         toDoTitle.classList.remove(classCompleted);
         toDoDescription.classList.remove(classCompleted);
         todo.check = false;
         localStorage.setItem(id, JSON.stringify(todo));
     }

}