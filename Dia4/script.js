// for(let i = 1; i <= 100; i++) {
//     if(i % 3 === 0) {
//         if(i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else {
//             console.log("Fizz");
//         }
//     } else if(i % 5 === 0) {
//         if(i % 3 === 0) {
//             console.log("FizzBuzz");
//         } else {
//             console.log("Buzz");
//         }    
//     } else {
//         console.log(i);
//     }
// }

function pedirUber(a, b) {
    console.log("Tu conductor va en camino a " + a);
    console.log("Vamos a " + b);
}

function cobrar(monto) {
    let montoFinal = 0;
    montoFinal = Math.round(monto);
    console.log("Se te cobrará a tu tarjeta un monto de $" + montoFinal)
}

let encuentro = "Calle 22, colonia México, Mérida.";
let destino = "Plaza La Isla";

function jugar(j1, j2) {
    ...
}

jugar("piedra", "papel");
jugar("piedra", "piedra");
jugar("piedra", "tijeras");
jugar("pollo", "papel");




pedirUber(encuentro, destino);
cobrar(110);