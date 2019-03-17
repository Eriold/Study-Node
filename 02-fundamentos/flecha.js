// //función normal sumar
// function sumar1(a, b) {
//     return a + b;
// }

// //función de flecha sumar
// let sumar2 = (a, b) => a + b;

// //función saludar
// function saludar() {
//     return 'hola mundo';
// }

// //función flecha saludar
// let saludar2 = () => 'hola mundo';

// //fuction normal greatings
// function saludar3(nombre) {
//     return `Hola ${nombre}`;
// }

// // fuction arrow greatings
// let saludar4 = (nombre) => `hola tú eres ${nombre}`;

// console.log(saludar4('Daniel'));



// // console.log(sumar2(10, 20));
// // console.log(saludar2());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre())