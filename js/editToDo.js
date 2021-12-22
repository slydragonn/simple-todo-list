let switchButton = true;

export default function editToDo(id){
    const toDoParent = document.getElementById(id);
    const toDoTitle = toDoParent.querySelector('.todo__title');
    const toDoDescription = toDoParent.querySelector('.todo__description');
    const toDoEditButton = toDoParent.querySelector('.todo__button--edit');

    switchButton = toDoEditButton.value === 'Edit' ? true : false;

    if(switchButton){

         const valueTitle = toDoTitle.textContent;
         const valueDescription = toDoDescription.textContent;

        toDoTitle.innerHTML = `<input type="text" value="${valueTitle}" id="title${id}"/>`;
        toDoDescription.innerHTML = `<input type="text" value="${valueDescription}" id="description${id}" />`;

        toDoEditButton.value = 'Apply';
        return switchButton = !switchButton;

    }else{

        const title = document.getElementById(`title${id}`).value;
        const description = document.getElementById(`description${id}`).value;

        toDoTitle.innerHTML = `${title}`;
        toDoDescription.innerHTML = `${description}`;

        const todo = JSON.parse(localStorage.getItem(id));
        todo.nameTodo = title;
        todo.description = description;

        localStorage.setItem(id, JSON.stringify(todo));

        toDoEditButton.value = 'Edit';
        return switchButton = !switchButton;
    }

}