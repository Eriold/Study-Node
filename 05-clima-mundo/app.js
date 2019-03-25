const lugar = require('./lugar/lugar');
const colors = require('colors/safe');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;
//console.log(argv.direccion);
// place.getLugarLatLng(argv.direccion)
//     .then(console.log);

// time.getTime(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);