// Requerimos el módulo nativo FileSystem 
let fs = require('fs');

let moduloTareas = { 
    leerJSON : () => { 
        let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJSON)
    }, 
    escribirJSON : (tareas) => {
        // Punto 2.a.i: Convertir el array recibido como parámetro a un string en formato JSON.
        let nuevoJSON = JSON.stringify(tareas)

        // Punto 2.a.ii:Guardar la información en el archivo .json que contiene la lista de nuestras tareas.
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    guardarTarea : (nuevaTarea) => {
        // Punto 2.b.i: Obtener toda la información del archivo .json en donde tenemos nuestras tareas.
        let tareasAnteriores = moduloTareas.leerJSON() 

        //Punto 2.b.ii: Debemos agregar la tarea nueva al array que obtuvimos en el punto anterior.
        tareasAnteriores.push(nuevaTarea) 

        //Punto 2.b.iii:Guardar el array actualizado en el archivo .json.
        moduloTareas.escribirJSON(tareasAnteriores)
    },
    filtrarPorEstado: (estado)=>{
        let tareasAnteriores = moduloTareas.leerJSON() 

        let tareasFiltradas = tareasAnteriores.filter((tarea)=>{
            return tarea.estado == estado
        })

        return tareasFiltradas
    }


}

module.exports = moduloTareas