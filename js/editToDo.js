let switchButton = true;

export default function editToDo(id){
    const toDoParent = document.getElementById(id);
    const toDoTitle = toDoParent.querySelector('.todo__title');
    const toDoDescription = toDoParent.querySelector('.todo__description');
    const toDoEditButton = toDoParent.querySelector('.todo__button--edit');

    if(switchButton){

         const valueTitle = toDoTitle.textContent;
         const valueDescription = toDoDescription.textContent;

        toDoTitle.innerHTML = `<input type="text" value="${valueTitle}" id="title"/>`;
        toDoDescription.innerHTML = `<input type="text" value="${valueDescription}" id="description" />`;
        
        toDoEditButton.value = 'Apply';
        switchButton = !switchButton;

    }else{

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        toDoTitle.innerHTML = `${title}`;
        toDoDescription.innerHTML = `${description}`;

        toDoEditButton.value = 'Edit';
        switchButton = !switchButton;
    }

}