import dateFormat from "./dateFormat.js";
import assignId from "./assignId.js";
import { getTarget } from "./app.js";

const listToDo = document.getElementById('listToDo');

const fragmentToDo = document.createDocumentFragment();
const templateToDo = document.getElementById('templateTodo').content;

const showToDo = (nameTodo, description, category) => {

    const idToDoCheck = assignId(8);
    const idToDoEdit = assignId(9);
    const idToDoDelet = assignId(10);
    const idToDo = assignId(11);

    templateToDo.querySelector('.todo').id = idToDo;
    templateToDo.querySelector('.todo__check').id = idToDoCheck;
    templateToDo.querySelector('.todo__button--edit').id = idToDoEdit;
    templateToDo.querySelector('.todo__button--delet').id = idToDoDelet;

    templateToDo.querySelector('.todo__title').textContent = nameTodo;
    templateToDo.querySelector('.todo__category').textContent = category;
    templateToDo.querySelector('.todo__description').textContent = description;
    templateToDo.querySelector('.todo__date').textContent = dateFormat('dd/mm/yy');

    const cloneTemplate = templateToDo.cloneNode(true);

    fragmentToDo.appendChild(cloneTemplate);

    listToDo.appendChild(fragmentToDo);

    const todo = document.querySelectorAll('.todo');

    return todo.forEach(e => e.addEventListener('click', e => getTarget(e.target)));
};

export default showToDo;