const options = {
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciuda para obtener el clima',
        demand: true
    }
}

const argv = require('yargs')
    .option(options)
    .argv;

module.exports = {
    argv
}