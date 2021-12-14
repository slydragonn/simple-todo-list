export default function completed(id){
    const toDoParent = document.getElementById(id);
    const toDoTitle = toDoParent.querySelector('.todo__title');
    const toDoDescription = toDoParent.querySelector('.todo__description');
    const toDoCheck = toDoParent.querySelector('.todo__check');

    const classCompleted = 'through';

    if(toDoCheck.checked){
         toDoTitle.classList.add(classCompleted);
         console.log(toDoTitle.classList.value)
         toDoDescription.classList.add(classCompleted);
     }else{
         toDoTitle.classList.remove(classCompleted);
         toDoDescription.classList.remove(classCompleted);
     }

}