//Requerimos el modulo de funciones y el modulo nativo necesario
let funcionesDeTareas = require('./modulos/funcionesDeTareas') 
let process = require('process')

//Damos valor a la accion a realizar, dependiendo de lo ingresado por el usuario
let accion = process.argv[2]

/* Posibles casos */ 
switch (accion) {
    case "listar":
        let tareas = funcionesDeTareas.leerJSON() 
        if(tareas.length === 0){ 
            console.log("La lista de tareas está vacia")
        }else{ 
            console.log("TAREAS:")
            tareas.forEach(tarea => {
                console.log(`Título: ${tarea.titulo}, Estado: ${tarea.estado}`)// Punto 1, Moduficar la funcionalidad de "Listar tareas" utilizando un forEach.
            })
        }
        break;
    //Punto 3.c.ii: En el archivo app.js necesitaremos un nuevo “case” que pueda procesar la opción crear ingresada como argumento.
    case "crear": 
        // Punto 2.c.i: El título de la nueva tarea lo ingresamos desde la terminal usando argumentos en la línea de comando.
        let titulo = process.argv[3]
        let estado = 'pendiente'
        
        // Punto 2.c.iii:  El título vendrá del argumento ingresado por consola y el estado de la tarea será siempre “pendiente” 
        let nuevaTarea = {  
            titulo : titulo,
            estado : estado
        }
        funcionesDeTareas.guardarTarea(nuevaTarea)
        break;
    case "filtrar": //Dentro del case “filtrar” guardaremos en una variable el estado ingresado desde la terminal.
        // Punto 3.c.i:El estado de las tareas que queremos obtener lo ingresamos desde la terminal usando argumentos en la línea de comando.
        let estadoAFiltrar = process.argv[3]

        //Punto 3.c.iii: El estado que acabamos de guardar será el parámetro con el que podemos ejecutar la función leerPorEstado.
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(estadoAFiltrar)

        //Punto 3.c.iv: Nos queda mostrar al usuario en la consola la lista de tareas que coinciden con el estado ingresado.
        tareasFiltradas.forEach(tarea => {
            console.log(`Título: ${tarea.titulo}, Estado: ${tarea.estado}`)// Punto 1, Moduficar la funcionalidad de "Listar tareas" utilizando un forEach.
        })
        break;
    case undefined :
        console.log("Atención - Tienes que pasar una acción.")
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
    break;
}
