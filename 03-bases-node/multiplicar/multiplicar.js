//requireds
const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`===Tabla de ${ base }====`.blue);
    console.log('================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${i*base}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${i*base}\n`);
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.red(`tabla-${base}-al-${limite}.txt`));
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}