let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe el empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

// Ejercicio práctico Logrado!! :D 
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
        // callback(null, salarioDB);
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        getSalario(empleado, (err, salario) => {
            if (err) {
                return console.log(err);
            }
            console.log(salario);
            //console.log(empleado);
        })
    }
});