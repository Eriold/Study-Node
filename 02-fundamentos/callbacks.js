// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Daniel',
        id
    }
    if (id === 20) {
        callback(`El ususario con el id ${id} no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(2, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);

});