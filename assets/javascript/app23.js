
let addTask = (e)=> {
 if(e.keyCode===13) {
     let node = $(e.target);
     let text = node[0];
     text2 = text.value.trim();
//keycode=13 implica se se desarrolle el evento cuando se pulsa la tecla enter.
// despues declaramos una variable llamada node que coge el evento y lo proyecta
// creamos la variable text y le decimos que 
     alert(text2);
 }  
}
//

let fun = ()=> {
    $('#tarea').on('keypress', addTask);
}


$(document).ready(fun());

let createTask = (text, id) => `
<div class="taskItem" id="${id}">
${text}
</div>
`

let deleteItemStorage = (e) => {
    let obj = $(e.target);
    let id = obj[0].id;
    let task = 'task-'+id;
    obj.remove();
    localStorage.removweItem(task);
}

 let i = 0;
 let id = 0;   
let addTask = function (e) {
    if(e.keyCode===13) {
        let node = $(e.target);
        let input = node[0];
        let taskText = input.value.trim();
        if(taskText===''){
            return;
        }
        let newTask = $(createTask(taskText, id));
        id++;
        $('.tareas').append(newTask);

        let task = 'task-'+id;
        localStorage.Item(task, taskItem);
        i++;
        $('.text').val('');
        $('.taskitem').on('click', deleteItemStorage);
}

let deleteStore = () => {
    localStorage.clear();
}

let callBackOnReady = () =>{
    $('.text').on('keypress', addTask);
    $('.bot').on('click', deleteStore);
}

$(document).ready(callBackOnReady);