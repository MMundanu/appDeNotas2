//const archivo = require("./funcionesDeTareas");
const {argv} = require("process");
const accion = argv[2] && argv[2].toLowerCase();
const {listar, guardarTarea, filtrarPoeEstado,} = require("./funcionesDeTareas");

switch (accion) {
    case "listar":
        listar()       
        break;
    case "crear":
    let nuevaObra = {
        
        titulo : argv[3],
        estado : "pendiente" 
       }
       guardarTarea(nuevaObra);       
    break;
    case "filtrar":
        filtrarPoeEstado(argv[3]);
        break;

    default:    
        break;
}

switch (accion) {
    
    case "crear":
       console.log("Tu nueva obra ha sido guardada correcamente");
    break;
    
    case  undefined :
        console.log("Atencion - Tienes que pasar una acción");

        break;

    default:
        console.log("No entiendo qué quieres hacer");
        break;
}



