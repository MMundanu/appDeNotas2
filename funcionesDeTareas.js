const fs = require("fs");



    const leerJSON = () =>{
        const tareasJSON = fs.readFileSync("./app-tareas/tareas.json", "utf-8");
        const obras = JSON.parse(tareasJSON);
        return obras
    }
    const listar = () => {
        let obras = leerJSON();
        obras.forEach((obra, i) => {
            console.log(`${i + 1} ${obra.obra} - ${obra.estado}`);})
    }
    const escribirJSON = (obras) => {
           let obrasStringi = JSON.stringify(obras, null, 3);
           fs.writeFileSync("./app-tareas/tareas.json", obrasStringi, "utf-8");
        }
    const guardarTarea = (obra) => {
        let obras = leerJSON();
        obras.push(obra);
        escribirJSON(obras);
    }
    const filtrarPoeEstado = (estado) => {
        let obras = leerJSON();
        let obrasFiltradas = obras.filter(obra => obra.estado.toLowerCase() === estado.toLowerCase());
        mostrarObras(obrasFiltradas);
    }
    const mostrarObras = (obras) => {
        obras.forEach((obra, i) => {
            console.log(`${i + 1} ${obra.obra} - ${obra.estado}`);
        });
        
    }

module.exports = {
    listar,
    guardarTarea,
    filtrarPoeEstado,
    mostrarObras
}

