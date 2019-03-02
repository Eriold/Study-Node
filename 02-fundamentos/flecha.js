//función normal
function sumar1(a, b) {
    return a + b;
}

//función de flecha
let sumar2 = (a, b) => a + b;

//función saludar
function saludar() {
    return 'hola mundo';
}

let saludar2 = () => 'hola mundo';

console.log(sumar2(10, 20));
console.log(saludar2());