const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea del bd', {
        descripcion
    })
    .command('lista', 'Lista tareas completadas', {
        completado
    })
    .command('listar', 'Lista de tareas', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}