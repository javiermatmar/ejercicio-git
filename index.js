// tendremos en un inicio un array vacío donde vamos a ¡¡pushear!! todas las tareas

// código de la clase

// let tareas = [
//     {
//         porHacer: {
//             title: "Estudiar JS"
//         }
//     },
//     {
//         completadas: {
//             title: "Pasear al perro"
//         }
//     }
// ];

// let tareasPorHacer = [];
// let tareasCompletadas = [];

/*
btnAgregarTarea => {
    Evento click o keyPress (tecla enter) que desencadena la acción -> añadir la tarea en el área de "tareas por hacer". En este proceso necesitamos lo siguiente:
    - Seleccionar el input 
    - Coger el valor del input (input.value) -> Solo si hay algo escrito (comprobar si el string no está vacío)
    - Añado esa tarea al array de "tareas por hacer"
    - Pinto la tarea en la zona de "tareas por hacer". Cuando agregue la tarea, también hay que añadir los botones:
        * tarea
        * btn eliminar
        * btn completar

    - Guardar en localStorage 
}

btnCompletar => { (cada tarea tiene un botón de completar "tick")
    Evento click dentro de la tarea, eso hará:
    - Eliminar la tarea de la zona de "tareas por hacer"
    - Llevarla a la zona de "tareas completadas"
    - Añadir al array de tareas completadas

    - Guardar en localStorage
}

btnEliminar => { (para eliminar las tareas)
    Evento click dentro de la tarea 
    - Eliminar la tarea por completo (sea en "tareas por hacer o en tareas completadas")
    - Eliminar del HTML

    - Guardar en localStorage
}

función para pintar las tareas en el DOM() {

}

*/

/*
    FASE1: 
    - coger el valor del input (seleccionar el valor del campo input)
    - evento click en el botón de agregar tarea 
    - pintarla en el DOM (a modo de array)
*/

let tareasPorHacer = [];
let tareasCompletadas = [];

const tareas = document.querySelector("input");
const tareasPendientes = document.querySelector("#por-hacer");
const tareasTerminadas = document.querySelector("#completadas");
const botonAgregar = document.querySelector(".añadir-tarea");
const btnEliminarTarea = document.querySelector(".papelera");
const btnTareaHecha = document.querySelector(".tick");

const listaTareas = document.querySelector(".listaDeTareas");
const listaCompletadas = document.querySelector("#listaDeTareasTwo");
const botones = document.querySelector(".btn");
const megaEraser = document.querySelector("#borrar-todo");

const sinTareasPendientes = document.querySelector("#nopendientes");
const sinTareasCompletadas = document.querySelector("#nocompletas");


const añadirTarea = (dato) => {
    dato.preventDefault();
    const valorInput = tareas.value;
    tareasPorHacer.push(valorInput);
    console.log(tareasPorHacer);
    
    if (valorInput !== ""){
        const tareaNueva = document.createElement("li");
        const textoTarea = `<p id="tarea"><img class="bean" src="img/bean.gif" /> <i class="fas fa-chevron-right"></i>${valorInput} <img class="minion" src="img/minion2.gif" /> </p>`;

        tareaNueva.innerHTML = textoTarea;
        tareaNueva.classList.add("elemento");
        tareas.value = '';
        
        sinTareasPendientes.classList.add("oculto");
        
        tareaNueva.appendChild(tareaEliminada(tareaNueva));
        tareaNueva.appendChild(tareaCompletada(tareaNueva));
        listaTareas.appendChild(tareaNueva);
        borrarTodo(tareaNueva);
           
    } else {
        alert("Por favor introduce una tarea");

        
    }
         
}

function borrarTodo (tareaNueva) {
    megaEraser.addEventListener("click", function() {
        listaTareas.removeChild(tareaNueva);
    });
    megaEraser.addEventListener("click", function() {
        listaCompletadas.removeChild(tareaNueva);
    });  
}




function tareaEliminada (tareaNueva) {
    const btnElemento1 = document.createElement("button");
    btnElemento1.innerHTML = `<i class="fas fa-trash-alt"></i></button>`;
    btnElemento1.classList.add("papelera");

    btnElemento1.addEventListener("click", function() {
        listaTareas.removeChild(tareaNueva);

    });
    btnElemento1.addEventListener("click", function() {
        listaCompletadas.removeChild(tareaNueva);
    })
    return btnElemento1;   
}

function tareaCompletada (tareaNueva) {
    const btnElemento2 = document.createElement("button");
    btnElemento2.innerHTML = `<i class="far fa-check-circle"></i>`;
    btnElemento2.classList.add("tick");
    
    btnElemento2.addEventListener("click", function(){
        listaCompletadas.appendChild(tareaNueva);
        sinTareasCompletadas.classList.add("oculto");
    });
    return btnElemento2;
}


botonAgregar.addEventListener('click', añadirTarea);
botonAgregar.addEventListener('click', añadirTarea);


