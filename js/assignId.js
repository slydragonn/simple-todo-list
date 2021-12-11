export default function assignId (length){
    let idToDo = 'todo';

    for(let i = 0; i < length; i++){
        idToDo = `${idToDo}${parseInt(Math.random() * 10)}`;
    }

    return idToDo;
}