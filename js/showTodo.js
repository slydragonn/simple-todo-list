import assignId from "./assignId.js";
import { getTarget } from "./app.js";
import removeFalseChilds from "./removeFalseChilds.js";

export const listToDo = document.getElementById('todos');
listToDo.addEventListener('click', event => getTarget(event.target));

const fragmentToDo = document.createDocumentFragment();
const templateToDo = document.getElementById('templateTodo').content;

const showToDo = (nameTodo, description, category, date, idToDo) => {

    const idToDoCheck = assignId(8);
    const idToDoEdit = assignId(9);
    const idToDoDelet = assignId(10);

    templateToDo.querySelector('.todo').id = idToDo;
    templateToDo.querySelector('.todo__check').id = idToDoCheck;
    templateToDo.querySelector('.todo__button--edit').id = idToDoEdit;
    templateToDo.querySelector('.todo__button--delet').id = idToDoDelet;

    templateToDo.querySelector('.todo__title').textContent = nameTodo;
    templateToDo.querySelector('.todo__category').textContent = category;
    templateToDo.querySelector('.todo__description').textContent = description;
    templateToDo.querySelector('.todo__date').textContent = date;

    const cloneTemplate = templateToDo.cloneNode(true);
    fragmentToDo.appendChild(cloneTemplate);
    listToDo.appendChild(fragmentToDo);

    return removeFalseChilds(listToDo);
};

export default showToDo;