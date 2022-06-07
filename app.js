//const archivo = require("./funcionesDeTareas");
const {argv} = require("process");
const accion = argv[2] && argv[2].toLowerCase();
const {listar, guardarTarea, filtrarPorEstado,} = require("./funcionesDeTareas");
const estados = ["terminada", "en progreso", "pendiente"];
const parametro = argv[3] && argv[3].toLowerCase();



switch (accion) {
    case "listar":
        listar()       
        break;
    case "crear":
    let nuevaObra = {
        
        titulo : parametro,
        estado : "pendiente" 
       }
       if (parametro) {
            guardarTarea(nuevaObra);
             console.log("Tu nueva obra ha sido guardada correcamente");
       } else{
             console.log("Debes asignarle un nombre a la obra")
       }
    break;
    case "filtrar":
        if (estados.includes(parametro)){
        filtrarPorEstado(parametro);}
        else if (!parametro){
            console.log("debes pasar un parametro");
        }else{
            console.log("debes pasar un parametro valido");
        }
        break;
    case  undefined :
        console.log("Atencion - Tienes que pasar una acción");

        break;

        default:
            console.log("No entiendo qué quieres hacer");
            break;
}

    
  
    
    

    




