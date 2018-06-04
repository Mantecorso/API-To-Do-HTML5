/*
let createTask = (text, id) => `
<div class="taskItem" id="${id}">
${text}
</div>
`
//crea la variable donde se generaran las entradas, sera un div con un identificador id y el texto que pongamos en el input//

let deleteItemStorage = (e) => {
    let obj = $(e.target);
    let id = obj[0].id;
    let task = 'task-'+id;
    obj.remove();
    localStorage.removeItem(task);
}

//crea la variable que borra del localStorage//

 let i = 0;
 let id = 0;   
 //vamos a realizar sumatorios para que cada identificador id sea unico//
let addTask = function (e) {
    if(e.keyCode===13) {
//si el evento e es igual a pulsar enter//
        let node = $(e.target);
        let input = node[0];
        let taskText = input.value.trim();
        if(taskText===''){
            return;
//el return hace que salga de la funcion//   
        }
//crea la nueva tarea con un id unico//
        let newTask = $(createTask(taskText, id));
        id++;
        $('.tareas').append(newTask);

        let task = 'task-'+id;
        localStorage.Item(task, taskItem);
        i++;
        $('.text').val('');
        $('.taskItem').on('click', deleteItemStorage);
    }    
}

let deleteStore = () => {
    localStorage.clear();
}

let callBackOnReady = () =>{
    $('.text').on('keypress', addTask);
    $('.bot').on('click', deleteStore);
}

$(document).ready(callBackOnReady);*/


let createTask = (text, id) => `
<div class="taskItem" id="${id}">
${text}
</div>
`
let deleteItemStorage = (e) =>{
   let obj = $(e.target);
   let id = obj[0].id;
   let task = 'task-'+id;
   obj.remove();
   localStorage.removeItem(task);
  }
  let i = 0;
let id = 0;
let addTask = function(e) {
   if(e.keyCode===13){
       let node = $(e.target);
       
       let input = node[0];
       let taskText = input.value.trim();
       if(taskText===''){
           return ;
       }
       
       let newTask = $(createTask(taskText, id));
       id++;
       $('.tareas').append(newTask);        
       
           let task = 'task-'+i;
           localStorage.setItem(task, taskText);
         i++;  
       $('.text').val('');
       $('.taskItem').on('click', deleteItemStorage);
       
   }
}
let deleteStore = () =>{
   localStorage.clear();
}
let callBackOnReady = () =>{
   $('.text').on('keypress', addTask);
   $('.bot').on('click', deleteStore);
}  
 $(document).ready(callBackOnReady);