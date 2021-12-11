import dateFormat from "./dateFormat.js";
import assignId from "./assignId.js";

const listToDo = document.getElementById('listToDo');

const fragmentToDo = document.createDocumentFragment();
const templateToDo = document.getElementById('templateTodo').content;

const showToDo = (nameTodo, description, category) => {

    const idToDoTitle = assignId(9);
    const idToDoDescription = assignId(10);

    templateToDo.querySelector('.todo__title').id = idToDoTitle;
    templateToDo.querySelector('.todo__description').id = idToDoDescription;

    templateToDo.querySelector('.todo__title').textContent = nameTodo;
    templateToDo.querySelector('.todo__category').textContent = category;
    templateToDo.querySelector('.todo__description').textContent = description;
    templateToDo.querySelector('.todo__date').textContent = dateFormat('dd/mm/yy');

    const cloneTemplate = templateToDo.cloneNode(true);

    fragmentToDo.appendChild(cloneTemplate);

    listToDo.appendChild(fragmentToDo);

    console.log(idToDoDescription);
    console.log(idToDoTitle);
};

export default showToDo;