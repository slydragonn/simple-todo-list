import completed from "./completed.js";
import showToDo from "./showTodo.js";

let switchOrder = true;

function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let left = [];
    let right = [];
    let aux = [];
    let pivot = arr.pop();

    if(switchOrder){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].date <= pivot.date) left.push(arr[i]);
            else right.push(arr[i]);
        }
    }else{
        for(let i = 0; i < arr.length; i++){
            if(arr[i].date >= pivot.date) left.push(arr[i]);
            else right.push(arr[i]);
        }
    }

    return aux.concat(quicksort(left), pivot, quicksort(right));
}

function showOrderReady(arr, container){
    container.innerHTML = '';
    arr.forEach(el => {
        const todo = JSON.parse(localStorage.getItem(el.id));
        showToDo(todo.nameTodo, todo.description, todo.category, todo.date, todo.id);
        if(todo.check) completed(todo.id, true);
    });
}

export default function orderToDo(container){

    const idAndDate = [];

    if(container.childNodes.length <= 1) return;
    else{
        for(let i = 0; i < container.childNodes.length; i++){
            let id = container.childNodes[i].id;
            let date = container.childNodes[i].children[3].innerText.split('/').reduce((ac, el) => parseInt(ac) + parseInt(el));

            let object = {};
            object.id = id;
            object.date = date;

            idAndDate.push(object);
        }
        const orderReady = quicksort(idAndDate);
        showOrderReady(orderReady, container);
        switchOrder = !switchOrder;
    }
}