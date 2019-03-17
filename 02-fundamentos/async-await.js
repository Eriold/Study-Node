//Async Await

// let getNombre = async() => {
//     //undefined.nombre;
//     //Dispara un error de una promesa el throw
//     //throw new Error('No existe un nombre para ese usuario');
//     return 'Daniel'
// };


let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
}

let saludo = async() => {
    //Debe estar siempre cargada el getNombre, porque sino, JS irá a pensar que está psa
    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}

// saludo().then(menjsae => {
//         console.log(nombre);
//     })
//     .catch(e => {
//         console.log('Error de Async', e);
//     })

saludo().then(mensaje => {
    console.log(mensaje);
    // })
    // .catch(e => {
    //     console.log('Error de Async', e);
})