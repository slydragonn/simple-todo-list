export default function deletToDo(id){

    const toDo = document.getElementById(id);
    localStorage.removeItem(id);
    return toDo.remove();
}